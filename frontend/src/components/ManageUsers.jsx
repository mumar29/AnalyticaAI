import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Typography, Button, Modal, Box, TextField, Chip, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
  CircularProgress, Alert, Tooltip, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Fade, Zoom, Grow, Skeleton, InputAdornment
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
// EditIcon removed
import DeleteIcon from '@mui/icons-material/Delete';
// SaveIcon removed
import CancelIcon from '@mui/icons-material/Cancel';
import WarningIcon from '@mui/icons-material/Warning';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RefreshIcon from '@mui/icons-material/Refresh';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AutorenewIcon from '@mui/icons-material/Autorenew';

// --- Constants ---
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'; // Adjust if your base URL is different
const API_KEY = '123'; // IMPORTANT: Move to environment variables in a real app!
const LOCAL_STORAGE_KEY_TOKEN = 'token'; // Key for storing the auth token

// --- Helper: Simple Password Generator ---
const generatePassword = (length = 12) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  // Ensure it meets potential basic complexity rules (example: at least one number/uppercase)
  if (!/\d/.test(password)) password += Math.floor(Math.random() * 10);
  if (!/[A-Z]/.test(password)) password += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return password.slice(0, length); // Trim back to length if added chars made it longer
};


// --- Styled Components ---
const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[12],
  padding: theme.spacing(3, 4),
  outline: 'none',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: alpha(theme.palette.primary.light, 0.04),
  },
  transition: 'background-color 0.2s ease-out',
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.light, 0.1),
    transform: 'translateY(-2px)',
    boxShadow: `0 4px 8px -2px ${alpha(theme.palette.common.black, 0.1)}`,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: theme.shadows[6],
  borderRadius: theme.shape.borderRadius * 1.5,
  overflow: 'hidden',
  width: '100%',
  marginTop: theme.spacing(4),
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[10],
  },
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: '600',
  color: theme.palette.common.white,
  fontSize: '1.05rem',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
}));

const ActionButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1.5), // Adjust gap if only one button remains often
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  textTransform: 'none',
  padding: theme.spacing(0.8, 2.5),
  boxShadow: theme.shadows[2],
  transition: 'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.2s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: theme.shadows[6],
    transform: 'scale(1.03)',
    '&::after': {
      opacity: 0,
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: alpha(theme.palette.common.white, 0.1),
    opacity: 0,
    transition: 'opacity 0.2s ease',
  },
  '&:active': {
    transform: 'scale(0.98)',
    boxShadow: theme.shadows[3],
  },
}));

const ActionIconButton = styled(IconButton)(({ theme }) => ({
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

const WarningDialogContent = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(3, 3, 1),
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(4),
}));

// --- Component ---
const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state for initial fetch
  const [fetchError, setFetchError] = useState(null); // Error during initial fetch

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const [loadingCreate, setLoadingCreate] = useState(false); // Loading state for create operation
  const [errorCreate, setErrorCreate] = useState(''); // Error specific to create modal
  const [successMessage, setSuccessMessage] = useState(''); // General success/error messages
  const successTimeoutRef = useRef(null);

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false); // State for delete confirmation dialog
  const [userToDelete, setUserToDelete] = useState(null); // User object marked for deletion
  const [isDeletingUser, setIsDeletingUser] = useState(false); // Loading state for delete operation

  // --- Fetch Users Function ---
  const fetchUsers = useCallback(async () => {
    setIsLoading(true); // Set loading true for fetching
    setFetchError(null); // Clear previous fetch errors
    // Keep existing success/error messages unless explicitly cleared elsewhere

    const token = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN);
    if (!token) {
      setFetchError("Authentication token not found. Please log in again.");
      setIsLoading(false);
      // Optional: Redirect to login
      // navigate('/login');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/get-users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-API-Key': API_KEY,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        // Use detail from API response if available
        throw new Error(data.detail || `HTTP error! status: ${response.status}`);
      }

      if (data.status === 'success' && Array.isArray(data.data)) {
        setUsers(data.data); // Update state with fetched users
      } else {
        throw new Error(data.message || "Failed to fetch users: Invalid response format.");
      }

    } catch (error) {
      console.error("Error fetching users:", error);
      setFetchError(`Failed to load users: ${error.message}. Please try again.`);
      setUsers([]); // Clear users on error
    } finally {
      setIsLoading(false); // Set loading false after fetch attempt
    }
  }, []); // No dependencies needed here unless using navigate for redirect

  // --- Effect to Fetch Users on Component Mount ---
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]); // Depend on the memoized fetchUsers function

  // --- Effect to clear success/error message after a delay ---
  useEffect(() => {
    if (successMessage) {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
      // Set timeout to clear the message
      successTimeoutRef.current = setTimeout(() => {
        setSuccessMessage('');
      }, 4000); // 4 seconds
    }
    // Cleanup function to clear timeout if component unmounts or message changes
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, [successMessage]); // Re-run effect when successMessage changes

  // --- Create Modal Handlers ---
  const handleOpenCreate = () => {
    // Reset form fields and generate a new password
    setNewUser({
      name: '',
      email: '',
      password: generatePassword()
    });
    setErrorCreate(''); // Clear any previous create errors
    setOpenCreateModal(true); // Open the modal
  };
  const handleCloseCreate = () => {
    setOpenCreateModal(false);
    setErrorCreate(''); // Clear errors when closing
  };

  // --- Delete Confirmation Handlers ---
  const handleDeleteRequest = (user) => {
    setUserToDelete(user); // Set the user to be deleted
    setDeleteConfirmOpen(true); // Open the confirmation dialog
  };
  const handleDeleteConfirmClose = () => {
    setDeleteConfirmOpen(false); // Close the dialog
    // Important: Clear the userToDelete state when closing via Cancel/backdrop click
    // This prevents accidental deletion if the dialog is reopened later without selecting a user
    setUserToDelete(null);
    setIsDeletingUser(false); // Also reset loading state if cancelled
  };

  // --- API Call: Delete User ---
  const handleDeleteConfirmProceed = async () => {
    // Prevent multiple simultaneous requests or deleting without a selection
    if (isDeletingUser || !userToDelete) return;

    setIsDeletingUser(true); // Set loading state for delete operation
    setSuccessMessage(''); // Clear previous messages

    const token = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN);
    if (!token) {
      // Display error in the main alert area since the dialog will close
      setSuccessMessage("Error: Authentication token not found. Please log in again.");
      setIsDeletingUser(false);
      setDeleteConfirmOpen(false); // Close dialog
      setUserToDelete(null); // Clear selection
      return;
    }

    const userIdToDelete = userToDelete.id;
    const userEmailToDelete = userToDelete.email; // Store for messages

    console.log(`Attempting to delete user ID: ${userIdToDelete}`);

    try {
      const response = await fetch(`${API_BASE_URL}/delete-user/${userIdToDelete}`, {
        method: 'DELETE',
        headers: {
          // 'Content-Type' is typically not needed for DELETE requests without a body
          'Authorization': `Bearer ${token}`,
          'X-API-Key': API_KEY,
        },
      });

      // Attempt to parse JSON response even if status indicates an error,
      // as the body might contain error details.
      let data = {};
      try {
          // Handle 204 No Content specifically, as it won't have a body to parse
          if (response.status !== 204) {
              data = await response.json();
          }
      } catch (jsonError) {
          // If JSON parsing fails AND the response status was not OK, throw the HTTP error.
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          // If response was OK (like 204) but no JSON, it's still a success.
      }

      // Check if the HTTP status code indicates success (e.g., 200 OK, 204 No Content)
      if (!response.ok) {
        // Use the 'detail' field from the parsed JSON error response if available
        throw new Error(data.detail || `HTTP error! status: ${response.status}`);
      }

      // --- Deletion Successful ---
      setSuccessMessage(`User '${userEmailToDelete}' (ID: ${userIdToDelete}) deleted successfully!`);

      // Update the local state to reflect the deletion immediately (Optimistic Update)
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userIdToDelete));

      // Alternatively, re-fetch the entire list for maximum consistency:
      // fetchUsers();

    } catch (error) {
      console.error("Error deleting user:", error);
      // Display the error message in the main alert area
      setSuccessMessage(`Error deleting user '${userEmailToDelete}': ${error.message}`);
    } finally {
      // Ensure loading state is reset and dialog is closed regardless of outcome
      setIsDeletingUser(false);
      setDeleteConfirmOpen(false);
      setUserToDelete(null); // Clear the selected user
    }
  };

  // --- API Call: Create User ---
  const handleAddUser = async () => {
    // Client-side validation first
    if (!newUser.name.trim()) {
      setErrorCreate("Name is required.");
      return;
    }
    if (!newUser.email || !/\S+@\S+\.\S+/.test(newUser.email)) {
      setErrorCreate("Please enter a valid email address.");
      return;
    }
     if (!newUser.password) {
      setErrorCreate("Password cannot be empty.");
      return;
    }
    // Check against current client-side list (server should perform the definitive check)
    if (users.some(user => user.email.toLowerCase() === newUser.email.toLowerCase())) {
      setErrorCreate("This email address is already in use.");
      return;
    }

    setLoadingCreate(true); // Set loading state for create operation
    setErrorCreate(''); // Clear previous create errors
    setSuccessMessage(''); // Clear general messages

    const token = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN);
    if (!token) {
      setErrorCreate("Authentication error. Please log in again.");
      setLoadingCreate(false);
      return;
    }

    // Prepare user data payload for the API
    const userData = {
      name: newUser.name.trim(),
      email: newUser.email.toLowerCase(), // Send email in lowercase
      password: newUser.password,
      role: 'member', // Role is fixed to 'member' as per requirement
    };

    console.log('Attempting to create user with data:', userData);

    try {
      const response = await fetch(`${API_BASE_URL}/create-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-API-Key': API_KEY,
        },
        body: JSON.stringify(userData), // Send user data as JSON string
      });

      const data = await response.json(); // Parse the JSON response from the server

      if (!response.ok) {
        // Throw an error if response status is not OK (e.g., 4xx, 5xx)
        // Use the 'detail' field from the API's error response if available
        throw new Error(data.detail || `HTTP error! status: ${response.status}`);
      }

      // Check if the API response indicates success and includes the new user ID
      if (data.status === 'success' && data.user_id) {
        // --- Creation Successful ---
        setSuccessMessage(`User '${userData.email}' created successfully (ID: ${data.user_id})!`);
        handleCloseCreate(); // Close the create modal
        fetchUsers(); // Refresh the user list to show the newly added user
      } else {
        // Handle cases where the status is 2xx but the expected data isn't present
        throw new Error(data.message || "Failed to create user: Invalid response from server.");
      }

    } catch (error) {
      console.error("Error creating user:", error);
      // Display the error message within the create modal
      setErrorCreate(`Failed to create user: ${error.message}`);
    } finally {
      setLoadingCreate(false); // Reset loading state for create operation
    }
  };

  // --- Form Input Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding field in the newUser state
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  // Regenerate password in the create modal
  const handleRegeneratePassword = () => {
    setNewUser(prev => ({ ...prev, password: generatePassword() }));
  };

  // --- Render Helper for Table Body ---
  const renderTableBody = () => {
    // Show skeleton loaders only on the initial load when users array is empty
    if (isLoading && users.length === 0) {
      return (
        <>
          {[...Array(5)].map((_, index) => ( // Display 5 skeleton rows
            <StyledTableRow key={index}>
              <TableCell><Skeleton variant="text" width="80%" /></TableCell>
              <TableCell><Skeleton variant="text" width="90%" /></TableCell>
              <TableCell><Skeleton variant="text" width="70%" /></TableCell>
              <TableCell><Skeleton variant="text" width="60%" /></TableCell>
              <TableCell align="center"><Skeleton variant="rectangular" width={40} height={30} /></TableCell>
            </StyledTableRow>
          ))}
        </>
      );
    }

    // Show error message if fetching failed
    if (fetchError) {
      return (
        <StyledTableRow>
          <TableCell colSpan={5} align="center" sx={{ py: 5 }}>
            <Alert severity="error" sx={{ justifyContent: 'center' }}>
              {fetchError}
              <Button size="small" onClick={fetchUsers} startIcon={<RefreshIcon />} sx={{ ml: 2 }}>
                Retry
              </Button>
            </Alert>
          </TableCell>
        </StyledTableRow>
      );
    }

    // Filter out users with the 'admin' role before rendering
    const filteredUsers = users.filter(user => user.role !== 'admin');

    // Show message if no non-admin users are found (after filtering)
    if (filteredUsers.length === 0) {
      return (
        <StyledTableRow>
          <TableCell colSpan={5} align="center" sx={{ py: 5, fontSize: '1.1rem', color: 'text.secondary' }}>
            No non-admin users found for this organization.
          </TableCell>
        </StyledTableRow>
      );
    }

    // Render the filtered list of users
    return filteredUsers.map((user) => (
      <StyledTableRow key={user.id}>
        {/* User ID */}
        <TableCell component="th" scope="row" sx={{ fontSize: '1rem', py: 1.5, fontWeight: '500' }}>
          {user.id}
        </TableCell>
        {/* Username */}
        <TableCell sx={{ fontSize: '1rem', py: 1.5 }}>{user.user_name || '-'}</TableCell>
        {/* Email */}
        <TableCell sx={{ fontSize: '1rem', py: 1.5 }}>{user.email}</TableCell>
        {/* Role Chip */}
        <TableCell sx={{ py: 1.5 }}>
          <Chip
            label={user.role || 'N/A'} // Display role, fallback to 'N/A'
            color="primary" // Use primary color for non-admin roles
            size="small"
            sx={{
              fontWeight: 'bold', textTransform: 'capitalize', borderRadius: '6px',
              transition: 'all 0.2s ease', '&:hover': { transform: 'scale(1.05)', boxShadow: 1 }
            }}
          />
        </TableCell>
        {/* Action Buttons Cell */}
        <TableCell align="center" sx={{ py: 1 }}>
          <ActionButtonContainer>
            {/* Delete Button */}
            <Tooltip title="Delete User" arrow>
              {/* Disable button if a delete operation is currently in progress */}
              <ActionIconButton
                color="error"
                onClick={() => handleDeleteRequest(user)} // Trigger delete confirmation
                aria-label={`Delete user ${user.email}`}
                size="medium"
                sx={{ '&:hover': { backgroundColor: alpha('#f44336', 0.1) } }}
                disabled={isDeletingUser}
              >
                <DeleteIcon />
              </ActionIconButton>
            </Tooltip>
          </ActionButtonContainer>
        </TableCell>
      </StyledTableRow>
    ));
  };


  // --- JSX Structure ---
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      {/* Page Title */}
      <Typography variant="h4" component="h1" gutterBottom sx={{
        fontWeight: 'bold', color: 'primary.dark', mb: 1, textAlign: 'center', position: 'relative',
        '&::after': {
          content: '""', position: 'absolute', bottom: -10, left: '50%',
          transform: 'translateX(-50%)', width: '80px', height: '4px',
          backgroundColor: 'primary.main', borderRadius: '2px',
        }
      }}>
        Manage Users
      </Typography>

      {/* Global Success/Error Alert Area */}
      {successMessage && (
        <Grow in={!!successMessage} timeout={600}>
          <Alert
            // Determine severity based on message content
            severity={successMessage.startsWith('Error') ? 'error' : 'success'}
            sx={{ mt: 3, mb: 3, borderRadius: 2, boxShadow: 3, '& .MuiAlert-icon': { fontSize: '1.2rem' } }}
            // Allow manual closing of the alert
            onClose={() => setSuccessMessage('')}
          >
            {successMessage}
          </Alert>
        </Grow>
      )}

      {/* Top Action Buttons */}
      <ButtonsContainer>
        {/* Create New User Button */}
        <Zoom in={true} style={{ transitionDelay: '100ms' }}>
          <StyledButton
            variant="contained" color="primary" startIcon={<AddIcon />}
            onClick={handleOpenCreate}
            // Disable if initial list is loading OR a create operation is in progress
            disabled={loadingCreate || isLoading}
            sx={{ '&:hover': { background: theme => `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)` } }}
          >
             Create New User
          </StyledButton>
        </Zoom>
        {/* Back to Dashboard Button */}
        <Zoom in={true} style={{ transitionDelay: '200ms' }}>
          <StyledButton
            variant="outlined" color="secondary" onClick={() => navigate('/adminDashboard')} endIcon={<KeyboardArrowRightIcon />}
            sx={{ '&:hover': { borderColor: 'secondary.dark', color: 'secondary.dark', background: theme => alpha(theme.palette.secondary.light, 0.1) } }}
          >
            Back to Dashboard
          </StyledButton>
        </Zoom>
        {/* Refresh List Button */}
         <Zoom in={true} style={{ transitionDelay: '300ms' }}>
          <StyledButton
            variant="outlined" color="info" onClick={fetchUsers}
            // Show loading indicator if fetching
            startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <RefreshIcon />}
            // Disable button while fetching
            disabled={isLoading}
          >
            {isLoading ? 'Refreshing...' : 'Refresh List'}
          </StyledButton>
        </Zoom>
      </ButtonsContainer>

      {/* User List Table */}
      <Fade in={true} timeout={800}>
        <StyledTableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="user management table">
            {/* Table Header */}
            <StyledTableHead>
              <TableRow>
                <StyledTableCell sx={{ width: '10%' }}>ID</StyledTableCell>
                <StyledTableCell sx={{ width: '30%' }}>Username</StyledTableCell>
                <StyledTableCell sx={{ width: '35%' }}>Email</StyledTableCell>
                <StyledTableCell sx={{ width: '15%' }}>Role</StyledTableCell>
                <StyledTableCell align="center" sx={{ width: '10%' }}>Actions</StyledTableCell>
              </TableRow>
            </StyledTableHead>
            {/* Table Body - Rendered by helper function */}
            <TableBody>
              {renderTableBody()}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Fade>

      {/* Create User Modal */}
      <Modal
        open={openCreateModal}
        onClose={handleCloseCreate}
        aria-labelledby="create-user-modal-title"
        closeAfterTransition
      >
        <Fade in={openCreateModal}>
          <ModalBox>
            {/* Modal Title */}
            <Typography id="create-user-modal-title" variant="h5" component="h2" gutterBottom sx={{
              fontWeight: 'bold', color: 'primary.main', mb: 3, position: 'relative',
              '&::after': { /* Underline style */
                content: '""', position: 'absolute', bottom: -8, left: 0,
                width: '40px', height: '3px', backgroundColor: 'primary.main', borderRadius: '1.5px',
              }
            }}>
              Create New Member
            </Typography>
            {/* Create Error Alert */}
            {errorCreate && (
              <Alert severity="error" sx={{ width: '100%', mb: 2 }} onClose={() => setErrorCreate('')}>
                {errorCreate}
              </Alert>
            )}
            {/* Create Form */}
            <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {/* Name Field */}
              <TextField
                label="Full Name" name="name" value={newUser.name} onChange={handleInputChange}
                fullWidth required variant="outlined" disabled={loadingCreate}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', '&.Mui-focused': { boxShadow: '0 0 0 3px rgba(63, 81, 181, 0.2)' } } }}
                autoFocus // Focus this field first
              />
              {/* Email Field */}
              <TextField
                label="Email Address" name="email" value={newUser.email} onChange={handleInputChange}
                type="email" fullWidth required variant="outlined" disabled={loadingCreate}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', '&.Mui-focused': { boxShadow: '0 0 0 3px rgba(63, 81, 181, 0.2)' } } }}
              />
              {/* Password Field */}
              <TextField
                label="Password" name="password" value={newUser.password} onChange={handleInputChange}
                type="text" // Show generated password
                fullWidth required variant="outlined" disabled={loadingCreate}
                InputProps={{
                  startAdornment: ( <InputAdornment position="start"> <VpnKeyIcon /> </InputAdornment> ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="Regenerate Password">
                        <IconButton aria-label="regenerate password" onClick={handleRegeneratePassword} edge="end" disabled={loadingCreate} >
                          <AutorenewIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', '&.Mui-focused': { boxShadow: '0 0 0 3px rgba(63, 81, 181, 0.2)' } } }}
              />
              {/* Role Field (Read-only) */}
              <TextField
                label="Role" value="Member" disabled fullWidth variant="outlined"
                InputProps={{ readOnly: true }}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              />
              {/* Modal Action Buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 3 }}>
                <StyledButton variant="outlined" color="secondary" onClick={handleCloseCreate} disabled={loadingCreate} startIcon={<CancelIcon />} >
                   Cancel
                </StyledButton>
                <StyledButton
                  variant="contained" color="primary" onClick={handleAddUser} // Trigger API call
                  // Disable button based on loading state and form validity
                  disabled={loadingCreate || !newUser.name.trim() || !newUser.email || !/\S+@\S+\.\S+/.test(newUser.email) || !newUser.password}
                  startIcon={loadingCreate ? <CircularProgress size={20} color="inherit" /> : <AddIcon />}
                >
                  {loadingCreate ? 'Creating...' : 'Add User'}
                </StyledButton>
              </Box>
            </Box>
          </ModalBox>
        </Fade>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirmOpen}
        onClose={handleDeleteConfirmClose} // Use handler that resets state
        aria-labelledby="delete-confirm-dialog-title"
        PaperProps={{
          elevation: 8,
          sx: { borderRadius: 3, overflow: 'hidden', maxWidth: '450px', width: '90%' }
        }}
      >
        {/* Dialog Title */}
        <DialogTitle id="delete-confirm-dialog-title" sx={{
          pb: 1, background: theme => `linear-gradient(90deg, ${theme.palette.error.light}, ${theme.palette.error.main})`,
          color: 'white', fontWeight: 600
        }}>
          Confirm Deletion
        </DialogTitle>
        {/* Dialog Content */}
        <WarningDialogContent>
          <WarningIcon color="error" sx={{ fontSize: 32, mt: 0.5 }} />
          <DialogContentText sx={{ color: 'text.primary' }}>
            {/* Display user details if available */}
            {userToDelete && (
              <> Are you sure you want to delete user <strong>{userToDelete.email}</strong> (Username: {userToDelete.user_name || 'N/A'})? This action cannot be undone. </>
            )}
          </DialogContentText>
        </WarningDialogContent>
        {/* Dialog Actions */}
        <DialogActions sx={{ px: 3, pb: 3, pt: 1, justifyContent: 'space-between' }}>
          {/* Cancel Button */}
          <StyledButton
            onClick={handleDeleteConfirmClose} // Use handler that resets state
            color="inherit" sx={{ color: 'text.secondary' }}
            disabled={isDeletingUser} // Disable if delete is in progress
          >
             Cancel
          </StyledButton>
          {/* Confirm Delete Button */}
          <StyledButton
            onClick={handleDeleteConfirmProceed} // Trigger delete API call
            variant="contained" color="error"
            startIcon={isDeletingUser ? <CircularProgress size={20} color="inherit" /> : <DeleteIcon />}
            autoFocus
            disabled={isDeletingUser} // Disable if delete is in progress
          >
            {isDeletingUser ? 'Deleting...' : 'Confirm Delete'}
          </StyledButton>
        </DialogActions>
      </Dialog>

    </Container>
  );
};

export default ManageUsers;