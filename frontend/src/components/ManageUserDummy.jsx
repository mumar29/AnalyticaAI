// src/Components/ManageUsers.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Typography, Button, Modal, Box, TextField, MenuItem, Chip, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
  CircularProgress, // For loading states
  Alert, // For displaying errors and success messages
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// --- Constants ---
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'; // Adjust if your base URL is different
const API_KEY = '123'; // Your API Key, consider moving to environment variables

// --- Styled Components ---
const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  backgroundColor: theme.palette.background.paper, // Use theme background
  borderRadius: '12px',
  boxShadow: theme.shadows[10], // More pronounced shadow
  padding: theme.spacing(4), // Consistent padding
  outline: 'none',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover, // Subtle striping
  },
  // Disable hover effect if needed, or keep the original
  '&:hover': {
    backgroundColor: '#f5f7fa', // Original hover effect
    transition: 'background-color 0.3s ease',
  },
  '&:last-child td, &:last-child th': {
    border: 0, // Remove border for the last row
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: theme.shadows[6], // Consistent shadow
  borderRadius: '12px',
  overflow: 'hidden', // Ensures border radius is applied to content
  width: '100%',
  marginTop: theme.spacing(3), // Add some margin top
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.common.white, // White text for header
  fontSize: '1.1rem',
  padding: theme.spacing(2), // Adjust padding
}));

const ActionButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1), // Space between action buttons
}));

// --- Helper Function ---
const generatePassword = () => {
  // Simple 8-character random alphanumeric string
  return Math.random().toString(36).slice(2, 10);
};

// --- Component ---
const ManageUsers = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [users, setUsers] = useState([]); // Will be populated by API later
  const [newUser, setNewUser] = useState({ fullName: '', email: '' }); // Role is fixed, password generated
  const [editUser, setEditUser] = useState(null); // For editing functionality (API not implemented yet)
  const navigate = useNavigate();

  // --- State for API interactions ---
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [errorCreate, setErrorCreate] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // To show user ID after creation

  // --- TODO: Implement Fetch Users ---
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const token = localStorage.getItem('token');
  //     if (!token) { /* Handle missing token */ return; }
  //     try {
  //       const response = await axios.get(`${API_BASE_URL}/users`, { // Assuming a /users endpoint exists
  //         headers: { 'Authorization': `Bearer ${token}`, 'X-API-Key': API_KEY }
  //       });
  //       setUsers(response.data); // Adjust based on your API response structure
  //     } catch (error) {
  //       console.error("Failed to fetch users:", error);
  //       // Handle fetch error (e.g., show an alert)
  //     }
  //   };
  //   fetchUsers();
  // }, []); // Empty dependency array means run once on mount

  // --- Modal Handlers ---
  const handleOpenCreate = () => {
    setNewUser({ fullName: '', email: '' }); // Reset form
    setErrorCreate(''); // Clear previous errors
    setSuccessMessage(''); // Clear previous success messages
    setOpenCreateModal(true);
  };
  const handleCloseCreate = () => setOpenCreateModal(false);

  const handleOpenEdit = (user) => { // Pass the whole user object
    setEditUser({ ...user }); // Set the user to be edited
    // Reset any edit-specific errors here if needed
    setOpenEditModal(true);
  };
  const handleCloseEdit = () => {
    setOpenEditModal(false);
    setEditUser(null); // Clear edit user state on close
  };

  // --- Form Input Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };

  // --- API Call: Create User ---
  const handleAddUser = async () => {
    setLoadingCreate(true);
    setErrorCreate('');
    setSuccessMessage('');

    const token = localStorage.getItem('token');
    if (!token) {
      setErrorCreate('Authentication error: No token found. Please log in again.');
      setLoadingCreate(false);
      // Optional: Redirect to login
      // navigate('/login');
      return;
    }

    const generatedPassword = generatePassword();
    const userData = {
      // fullName: newUser.fullName, // Include if your UserCreate model requires it
      email: newUser.email,
      password: generatedPassword,
      role: 'member', // Hardcoded role as requested
    };

    console.log('Sending user data:', userData); // Log data being sent

    try {
      const response = await axios.post(
        `${API_BASE_URL}/create-user`,
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'X-API-Key': API_KEY,
          },
        }
      );

      console.log('Create User Response:', response.data);

      if (response.data.user_id) {
        setSuccessMessage(`User created successfully! User ID: ${response.data.user_id}`);
        handleCloseCreate(); // Close modal on success
        // --- TODO: Refetch the user list here to update the table ---
        // fetchUsers(); // Call the function you'll create in useEffect
      } else {
        // Handle cases where API returns 2xx but no user_id (unexpected)
        setErrorCreate('Failed to create user: Invalid response from server.');
        console.error("Unexpected response structure:", response.data);
      }
    } catch (err) {
      console.error('Create User Error:', err);
      if (err.response) {
        // API returned an error status code (4xx, 5xx)
        console.error("API Error Response:", err.response.data);
        setErrorCreate(err.response.data?.detail || `Error ${err.response.status}: Failed to create user.`);
      } else if (err.request) {
        // Request was made but no response received (network error)
        setErrorCreate('Network error: Could not connect to the server.');
      } else {
        // Other errors (e.g., setup error)
        setErrorCreate('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoadingCreate(false);
    }
  };

  // --- Placeholder Functions for Edit/Delete (Needs API Integration) ---
  const handleUpdateUser = () => {
    // TODO: Implement API call to update user using 'editUser' state
    console.log('Updating user (local state):', editUser);
    // Find index (if using local state update temporarily)
    const index = users.findIndex(u => u.id === editUser.id); // Assuming users have 'id'
    if (index !== -1) {
        const updatedUsers = [...users];
        updatedUsers[index] = { ...updatedUsers[index], ...editUser }; // Merge changes
        setUsers(updatedUsers);
    }
    handleCloseEdit();
  };

  const handleDeleteUser = (userId) => { // Pass user ID
    // TODO: Implement API call to delete user by ID
    console.log('Attempting to delete user with ID (local state):', userId);
    // Optimistic UI update (remove immediately, revert if API call fails)
    setUsers(users.filter((user) => user.id !== userId)); // Assuming users have 'id'
    // Add API call here with error handling
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}> {/* Responsive padding */}
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
        Manage Users
      </Typography>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
        <Button
          variant="contained"
          color="secondary" // Use secondary color for primary action
          startIcon={<AddIcon />}
          sx={{ borderRadius: '8px', textTransform: 'none', boxShadow: 3, '&:hover': { boxShadow: 6 } }}
          onClick={handleOpenCreate}
        >
          Create User
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ borderRadius: '8px', textTransform: 'none' }}
          onClick={() => navigate('/adminDasboard')} // Navigate back
        >
          Back to Dashboard
        </Button>
      </Box>

      {/* Display Global Success Message */}
      {successMessage && (
        <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccessMessage('')}>
          {successMessage}
        </Alert>
      )}

      {/* User List Table */}
      <StyledTableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="user management table">
          <TableHead sx={{ backgroundColor: 'primary.main' }}> {/* Header background */}
            <TableRow>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell> {/* Added Email Column */}
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length === 0 ? (
              <StyledTableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4, fontSize: '1.1rem', color: 'text.secondary' }}>
                  No users found or loaded yet.
                </TableCell>
              </StyledTableRow>
            ) : (
              users.map((user) => ( // Assuming user object has id, fullName, email, role
                <StyledTableRow key={user.id || user.email}> {/* Use a unique key */}
                  <TableCell component="th" scope="row" sx={{ fontSize: '1rem', py: 1.5 }}>
                    {user.fullName || 'N/A'} {/* Handle potentially missing name */}
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', py: 1.5 }}>{user.email}</TableCell>
                  <TableCell sx={{ py: 1.5 }}>
                    <Chip
                      label={user.role}
                      color={user.role === 'admin' ? 'secondary' : 'primary'} // Different color for admin?
                      size="medium"
                      sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
                    />
                  </TableCell>
                  <TableCell align="center" sx={{ py: 1 }}>
                    <ActionButtonContainer>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenEdit(user)}
                        aria-label={`edit user ${user.fullName}`}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteUser(user.id)} // Pass user ID
                        aria-label={`delete user ${user.fullName}`}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ActionButtonContainer>
                  </TableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>

      {/* Create User Modal */}
      <Modal
        open={openCreateModal}
        onClose={handleCloseCreate}
        aria-labelledby="create-user-modal-title"
        aria-describedby="create-user-modal-description"
      >
        <ModalBox>
          <Typography id="create-user-modal-title" variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
            Create New Member
          </Typography>

          {/* Display Error in Modal */}
          {errorCreate && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
              {errorCreate}
            </Alert>
          )}

          <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              label="Full Name"
              name="fullName"
              value={newUser.fullName}
              onChange={handleInputChange}
              fullWidth
              required
              variant="outlined"
              disabled={loadingCreate}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            />
            <TextField
              label="Email Address"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              type="email"
              fullWidth
              required
              variant="outlined"
              disabled={loadingCreate}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            />
            {/* Role is fixed to 'member' */}
            <TextField
              label="Role"
              value="Member" // Display fixed role
              disabled
              fullWidth
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            />
            <TextField
              label="Password"
              value="Auto-generated" // Display placeholder
              disabled // Always disabled
              fullWidth
              variant="outlined"
              helperText="A secure password will be generated automatically."
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 2 }}>
               <Button
                 variant="outlined"
                 onClick={handleCloseCreate}
                 disabled={loadingCreate}
                 sx={{ borderRadius: '8px' }}
               >
                 Cancel
               </Button>
               <Button
                 variant="contained"
                 color="primary"
                 onClick={handleAddUser}
                 disabled={loadingCreate}
                 sx={{ borderRadius: '8px', boxShadow: 3, minWidth: 120 }} // Ensure button has min width
                 startIcon={loadingCreate ? <CircularProgress size={20} color="inherit" /> : null}
               >
                 {loadingCreate ? 'Creating...' : 'Add User'}
               </Button>
            </Box>
          </Box>
        </ModalBox>
      </Modal>

      {/* Edit User Modal (Structure only, API not implemented) */}
      <Modal
        open={openEditModal}
        onClose={handleCloseEdit}
        aria-labelledby="edit-user-modal-title"
      >
        <ModalBox>
          <Typography id="edit-user-modal-title" variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
            Edit User
          </Typography>
          {editUser && ( // Only render form if editUser is set
            <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <TextField
                label="Full Name"
                name="fullName"
                value={editUser.fullName || ''}
                onChange={handleEditInputChange}
                fullWidth
                required
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              />
              <TextField
                label="Email Address"
                name="email"
                value={editUser.email || ''}
                onChange={handleEditInputChange}
                type="email"
                fullWidth
                required
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              />
              <TextField
                select
                label="Role"
                name="role"
                value={editUser.role || ''}
                onChange={handleEditInputChange}
                fullWidth
                required
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              >
                {/* Add roles available in your system */}
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="viewer">Viewer</MenuItem>
                <MenuItem value="member">Member</MenuItem>
              </TextField>
              <TextField
                label="Password"
                value="Cannot be changed here"
                disabled
                fullWidth
                variant="outlined"
                helperText="Password management might require a separate process."
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 2 }}>
                 <Button
                   variant="outlined"
                   onClick={handleCloseEdit}
                   sx={{ borderRadius: '8px' }}
                 >
                   Cancel
                 </Button>
                 <Button
                   variant="contained"
                   color="primary"
                   onClick={handleUpdateUser} // Calls placeholder function
                   sx={{ borderRadius: '8px', boxShadow: 3 }}
                 >
                   Update User
                 </Button>
              </Box>
            </Box>
          )}
        </ModalBox>
      </Modal>
    </Container>
  );
};

export default ManageUsers;






















// // src/Components/ManageUsers.jsx
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {
//   Container, Typography, Button, Modal, Box, TextField, MenuItem, Chip,
//   IconButton, Grid, Card, CardContent, CardActions,
//   CircularProgress,
//   Alert,
//   Skeleton, // For loading state when fetching users
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EmailIcon from '@mui/icons-material/Email';
// import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import PersonIcon from '@mui/icons-material/Person'; // Icon for Full Name (if used)

// // --- Constants ---
// const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'; // Adjust if your base URL is different
// const API_KEY = '123'; // Your API Key - **IMPORTANT: Use environment variables in production!**

// // --- Styled Components ---
// const ModalBox = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90%',
//   maxWidth: 600,
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: '12px',
//   boxShadow: theme.shadows[10],
//   padding: theme.spacing(4),
//   outline: 'none',
// }));

// // Card Styling
// const UserCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   height: '100%',
//   borderRadius: '12px',
//   boxShadow: theme.shadows[4],
//   transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//   '&:hover': {
//     transform: 'translateY(-4px)',
//     boxShadow: theme.shadows[8],
//   },
// }));

// const UserCardContent = styled(CardContent)(({ theme }) => ({
//   flexGrow: 1,
//   paddingBottom: theme.spacing(1),
// }));

// const UserCardActions = styled(CardActions)(({ theme }) => ({
//   justifyContent: 'flex-end',
//   padding: theme.spacing(1, 2, 2, 2),
// }));

// const InfoItem = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: theme.spacing(1.5),
//     color: theme.palette.text.secondary,
//     wordBreak: 'break-word', // Prevent long emails/names from overflowing
//     '& svg': {
//         marginRight: theme.spacing(1.5),
//         color: theme.palette.primary.main,
//         flexShrink: 0, // Prevent icon from shrinking
//     },
//     '& .MuiTypography-root': { // Target Typography within InfoItem
//         flexGrow: 1, // Allow text to take available space
//         minWidth: 0, // Prevent text from pushing icon away
//     }
// }));

// // --- Helper Function ---
// const generatePassword = () => {
//   // Simple 8-character random alphanumeric string
//   return Math.random().toString(36).slice(2, 10);
// };

// // --- Component ---
// const ManageUsers = () => {
//   const [openCreateModal, setOpenCreateModal] = useState(false);
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [users, setUsers] = useState([]); // State to hold the list of users
//   const [newUser, setNewUser] = useState({ fullName: '', email: '' }); // State for the create form
//   const [editUser, setEditUser] = useState(null); // State for the user being edited
//   const navigate = useNavigate();

//   // --- State for API interactions ---
//   // Create User states
//   const [loadingCreate, setLoadingCreate] = useState(false);
//   const [errorCreate, setErrorCreate] = useState('');
//   // Fetch Users states
//   const [loadingUsers, setLoadingUsers] = useState(true); // Start loading users initially
//   const [errorUsers, setErrorUsers] = useState(''); // Error fetching users list
//   // General success/feedback message
//   const [successMessage, setSuccessMessage] = useState('');

//   // --- Fetch Users Function ---
//   const fetchUsers = useCallback(async () => {
//     setLoadingUsers(true);
//     setErrorUsers(''); // Clear previous fetch errors
//     setSuccessMessage(''); // Clear previous success messages
//     const token = localStorage.getItem('token');

//     if (!token) {
//       setErrorUsers('Authentication error: Please log in to view users.');
//       setLoadingUsers(false);
//       // Optional: Redirect to login after a delay
//       // setTimeout(() => navigate('/login'), 3000);
//       return;
//     }

//     try {
//       console.log("Fetching users..."); // Log start
//       const response = await axios.get(`${API_BASE_URL}/users`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'X-API-Key': API_KEY
//         }
//       });
//       console.log("Users fetched:", response.data); // Log response
//       setUsers(response.data || []); // Ensure users is always an array, even if API returns null/undefined
//     } catch (error) {
//       console.error("Failed to fetch users:", error);
//       if (error.response) {
//         console.error("API Error Response (Fetch Users):", error.response.data);
//         setErrorUsers(error.response.data?.detail || `Error ${error.response.status}: Could not load users.`);
//       } else if (error.request) {
//         setErrorUsers("Network Error: Could not connect to the server to fetch users.");
//       } else {
//         setErrorUsers("An unexpected error occurred while fetching users.");
//       }
//       setUsers([]); // Clear users on error to avoid displaying stale data
//     } finally {
//       setLoadingUsers(false); // Stop loading indicator regardless of outcome
//     }
//   }, [navigate]); // Dependency: navigate if used for redirection

//   // --- Fetch users on component mount ---
//   useEffect(() => {
//     fetchUsers();
//   }, [fetchUsers]); // Depend on the memoized fetchUsers function

//   // --- Modal Handlers ---
//   const handleOpenCreate = () => {
//     setNewUser({ fullName: '', email: '' }); // Reset form fields
//     setErrorCreate(''); // Clear errors from previous attempts
//     setSuccessMessage(''); // Clear general success messages
//     setOpenCreateModal(true);
//   };
//   const handleCloseCreate = () => setOpenCreateModal(false);

//   const handleOpenEdit = (user) => {
//     setEditUser({ ...user }); // Set the user data into the edit state
//     // Reset any edit-specific errors here if you add state for them
//     setSuccessMessage(''); // Clear general success messages
//     setOpenEditModal(true);
//   };
//   const handleCloseEdit = () => {
//     setOpenEditModal(false);
//     setEditUser(null); // Clear edit user state when modal closes
//   };

//   // --- Form Input Handlers ---
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEditInputChange = (e) => {
//     const { name, value } = e.target;
//     // Ensure editUser is not null before updating
//     if (editUser) {
//         setEditUser((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // --- API Call: Create User ---
//   const handleAddUser = async () => {
//     setLoadingCreate(true);
//     setErrorCreate('');
//     setSuccessMessage('');

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setErrorCreate('Authentication error: No token found. Please log in again.');
//       setLoadingCreate(false);
//       // Optional: Redirect to login
//       // navigate('/login');
//       return;
//     }

//     const generatedPassword = generatePassword();
//     const userData = {
//       // fullName: newUser.fullName, // Include if your UserCreate model requires it
//       email: newUser.email,
//       password: generatedPassword,
//       role: 'member', // Hardcoded role as requested
//     };

//     console.log('Sending user data:', userData); // Log data being sent

//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/create-user`,
//         userData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//             'X-API-Key': API_KEY,
//           },
//         }
//       );

//       console.log('Create User Response:', response.data);

//       if (response.data.user_id) {
//         setSuccessMessage(`User created successfully! User ID: ${response.data.user_id}`);
//         handleCloseCreate(); // Close modal on success
//         // --- TODO: Refetch the user list here to update the table ---
//         // fetchUsers(); // Call the function you'll create in useEffect
//       } else {
//         // Handle cases where API returns 2xx but no user_id (unexpected)
//         setErrorCreate('Failed to create user: Invalid response from server.');
//         console.error("Unexpected response structure:", response.data);
//       }
//     } catch (err) {
//       console.error('Create User Error:', err);
//       if (err.response) {
//         // API returned an error status code (4xx, 5xx)
//         console.error("API Error Response:", err.response.data);
//         setErrorCreate(err.response.data?.detail || `Error ${err.response.status}: Failed to create user.`);
//       } else if (err.request) {
//         // Request was made but no response received (network error)
//         setErrorCreate('Network error: Could not connect to the server.');
//       } else {
//         // Other errors (e.g., setup error)
//         setErrorCreate('An unexpected error occurred. Please try again.');
//       }
//     } finally {
//       setLoadingCreate(false);
//     }
//   };

//   // --- API Call: Update User (Placeholder) ---
//   const handleUpdateUser = async () => {
//     if (!editUser) return;

//     console.log('Attempting to update user (placeholder):', editUser);
//     setSuccessMessage(''); // Clear previous messages

//     // --- Start: Placeholder for API Call ---
//     // setLoadingEdit(true); // You would need state like [loadingEdit, setLoadingEdit] = useState(false);
//     // setErrorEdit(''); // You would need state like [errorEdit, setErrorEdit] = useState('');
//     // const token = localStorage.getItem('token');
//     // if (!token) { /* Handle error */ return; }
//     //
//     // try {
//     //   const updateData = { email: editUser.email, role: editUser.role, fullName: editUser.fullName }; // Send only updatable fields
//     //   const response = await axios.put( // Or PATCH
//     //     `${API_BASE_URL}/users/${editUser.id}`, // Assuming endpoint like /users/{user_id}
//     //     updateData,
//     //     { headers: { 'Authorization': `Bearer ${token}`, 'X-API-Key': API_KEY } }
//     //   );
//     //   console.log("Update response:", response.data);
//     //   setSuccessMessage(`User ${editUser.email} updated successfully.`);
//     //   handleCloseEdit();
//     //   fetchUsers(); // Refetch list after update
//     // } catch (error) {
//     //   console.error("Update user error:", error);
//     //   // setErrorEdit(error.response?.data?.detail || "Failed to update user."); // Set error state for the modal
//     // } finally {
//     //   // setLoadingEdit(false);
//     // }
//     // --- End: Placeholder for API Call ---

//     // If not implementing API yet, just close modal for now:
//     handleCloseEdit();
//     setSuccessMessage(`Update action for ${editUser.email} triggered (UI only).`); // Feedback
//   };

//   // --- API Call: Delete User (Placeholder) ---
//   const handleDeleteUser = async (userId, userEmail) => { // Pass email for confirmation/message
//     console.log(`Attempting to delete user ID: ${userId}, Email: ${userEmail}`);
//     setSuccessMessage(''); // Clear previous messages

//     // Optional: Confirmation Dialog
//     // if (!window.confirm(`Are you sure you want to delete user ${userEmail}? This action cannot be undone.`)) {
//     //   return;
//     // }

//     // --- Start: Placeholder for API Call ---
//     // setLoadingUsers(true); // Optionally show a global loading state or disable the card
//     // setErrorUsers(''); // Clear previous fetch errors
//     // const token = localStorage.getItem('token');
//     // if (!token) { /* Handle error */ return; }
//     //
//     // try {
//     //   const response = await axios.delete(
//     //     `${API_BASE_URL}/users/${userId}`, // Assuming endpoint like /users/{user_id}
//     //     { headers: { 'Authorization': `Bearer ${token}`, 'X-API-Key': API_KEY } }
//     //   );
//     //   console.log("Delete response:", response.data); // Check backend response format
//     //   setSuccessMessage(`User ${userEmail} (ID: ${userId}) deleted successfully.`);
//     //   // Refetch the list to confirm deletion from backend
//     //   fetchUsers();
//     // } catch (error) {
//     //   console.error("Delete user error:", error);
//     //   setErrorUsers(error.response?.data?.detail || `Failed to delete user ${userEmail}.`); // Show error globally
//     //   // setLoadingUsers(false); // Stop loading if you started it
//     // }
//     // --- End: Placeholder for API Call ---

//     // If not implementing API yet, use optimistic UI update:
//     setUsers(currentUsers => currentUsers.filter((user) => user.id !== userId));
//     setSuccessMessage(`User ${userEmail} (ID: ${userId}) removed from list (UI only).`); // Feedback
//   };


//   // --- Render Logic for User Cards ---
//   const renderUserCards = () => {
//     // 1. Loading State
//     if (loadingUsers) {
//       return (
//         <Grid container spacing={3}>
//           {[...Array(6)].map((_, index) => ( // Render 6 skeleton cards
//             <Grid item xs={12} sm={6} md={4} key={`skeleton-${index}`}>
//               <UserCard variant="outlined">
//                 <UserCardContent>
//                   <Skeleton variant="text" width="70%" height={28} sx={{ mb: 1 }}/>
//                   <InfoItem>
//                     <Skeleton variant="circular" width={20} height={20} sx={{ mr: 1.5 }}/>
//                     <Skeleton variant="text" width="80%" />
//                   </InfoItem>
//                   <InfoItem>
//                     <Skeleton variant="circular" width={20} height={20} sx={{ mr: 1.5 }}/>
//                     <Skeleton variant="rectangular" width={60} height={22} />
//                   </InfoItem>
//                    <InfoItem>
//                     <Skeleton variant="circular" width={20} height={20} sx={{ mr: 1.5 }}/>
//                     <Skeleton variant="text" width="40%" />
//                   </InfoItem>
//                 </UserCardContent>
//                 <UserCardActions>
//                   <Skeleton variant="circular" width={32} height={32} />
//                   <Skeleton variant="circular" width={32} height={32} />
//                 </UserCardActions>
//               </UserCard>
//             </Grid>
//           ))}
//         </Grid>
//       );
//     }

//     // 2. Error State
//     if (errorUsers) {
//       return <Alert severity="error" sx={{ mt: 3 }}>{errorUsers}</Alert>;
//     }

//     // 3. Empty State
//     if (!users || users.length === 0) {
//       return (
//         <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 5, fontStyle: 'italic' }}>
//           No users found in this organization. Use the "Create User" button to add one.
//         </Typography>
//       );
//     }

//     // 4. Success State: Display User Cards
//     return (
//       <Grid container spacing={3}>
//         {users.map((user) => (
//           <Grid item xs={12} sm={6} md={4} key={user.id}> {/* Use unique user.id as key */}
//             <UserCard variant="outlined"> {/* Use outlined variant for cards */}
//               <UserCardContent>
//                  {/* Optional: Display Full Name if available */}
//                  {/* {user.fullName && (
//                     <InfoItem>
//                         <PersonIcon fontSize="small"/>
//                         <Typography variant="h6" component="div" noWrap title={user.fullName}>
//                             {user.fullName}
//                         </Typography>
//                     </InfoItem>
//                  )} */}
//                  <InfoItem>
//                     <EmailIcon fontSize="small"/>
//                     <Typography variant="body1" noWrap title={user.email}>{user.email}</Typography>
//                  </InfoItem>
//                  <InfoItem>
//                     <SupervisorAccountIcon fontSize="small"/>
//                     <Chip
//                         label={user.role || 'N/A'} // Handle potential missing role
//                         color={user.role === 'admin' ? 'secondary' : 'primary'}
//                         size="small"
//                         sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
//                     />
//                  </InfoItem>
//                  <InfoItem>
//                     <VpnKeyIcon fontSize="small"/>
//                     <Typography variant="body2" color="text.secondary">ID: {user.id}</Typography>
//                  </InfoItem>
//               </UserCardContent>
//               <UserCardActions>
//                 <IconButton
//                   color="primary"
//                   onClick={() => handleOpenEdit(user)}
//                   aria-label={`Edit user ${user.email}`}
//                   size="medium" // Slightly larger buttons
//                   title="Edit User"
//                 >
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton
//                   color="error"
//                   onClick={() => handleDeleteUser(user.id, user.email)} // Pass ID and email
//                   aria-label={`Delete user ${user.email}`}
//                   size="medium"
//                   title="Delete User"
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </UserCardActions>
//             </UserCard>
//           </Grid>
//         ))}
//       </Grid>
//     );
//   };


//   // --- Main Component Return ---
//   return (
//     <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}> {/* Adjusted padding */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
//         User Management
//       </Typography>

//       {/* Action Buttons */}
//       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
//         <Button
//           variant="contained"
//           color="primary" // Primary color for create
//           startIcon={<AddIcon />}
//           sx={{ borderRadius: '8px', textTransform: 'none', boxShadow: 3, '&:hover': { boxShadow: 6 } }}
//           onClick={handleOpenCreate}
//         >
//           Create User
//         </Button>
//         <Button
//           variant="outlined"
//           color="secondary" // Secondary color for back
//           sx={{ borderRadius: '8px', textTransform: 'none' }}
//           onClick={() => navigate('/')} // Navigate back to dashboard or previous page
//         >
//           Back to Dashboard
//         </Button>
//       </Box>

//       {/* Display Global Success Message (e.g., after create/delete/update) */}
//       {successMessage && (
//         <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccessMessage('')}>
//           {successMessage}
//         </Alert>
//       )}
//       {/* Error message for fetching users is handled within renderUserCards */}


//       {/* User List Area - Renders Skeletons, Error, Empty, or Cards */}
//       {renderUserCards()}


//       {/* Create User Modal */}
//       <Modal
//         open={openCreateModal}
//         onClose={handleCloseCreate}
//         aria-labelledby="create-user-modal-title"
//         aria-describedby="create-user-modal-description"
//       >
//         <ModalBox>
//            <Typography id="create-user-modal-title" variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
//              Create New Member
//            </Typography>

//            {/* Display Create Error in Modal */}
//            {errorCreate && (
//              <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
//                {errorCreate}
//              </Alert>
//            )}

//            <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
//              {/* Full Name field - remove if not sending to backend */}
//              <TextField
//                label="Full Name"
//                name="fullName"
//                value={newUser.fullName}
//                onChange={handleInputChange}
//                fullWidth
//                required
//                variant="outlined"
//                disabled={loadingCreate}
//                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//              />
//              <TextField
//                label="Email Address"
//                name="email"
//                value={newUser.email}
//                onChange={handleInputChange}
//                type="email"
//                fullWidth
//                required
//                variant="outlined"
//                disabled={loadingCreate}
//                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//              />
//              <TextField
//                label="Role"
//                value="Member" // Display fixed role
//                disabled
//                fullWidth
//                variant="outlined"
//                InputProps={{ readOnly: true }} // Make it clear it's read-only
//                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//              />
//              <TextField
//                label="Password"
//                value="Auto-generated" // Display placeholder
//                disabled // Always disabled
//                fullWidth
//                variant="outlined"
//                helperText="A secure password will be generated automatically."
//                InputProps={{ readOnly: true }}
//                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//              />
//              {/* Modal Action Buttons */}
//              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 3 }}>
//                 <Button
//                   variant="outlined"
//                   onClick={handleCloseCreate}
//                   disabled={loadingCreate}
//                   sx={{ borderRadius: '8px' }}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleAddUser}
//                   disabled={loadingCreate || !newUser.email /* Basic validation */}
//                   sx={{ borderRadius: '8px', boxShadow: 3, minWidth: 120 }}
//                   startIcon={loadingCreate ? <CircularProgress size={20} color="inherit" /> : null}
//                 >
//                   {loadingCreate ? 'Creating...' : 'Add User'}
//                 </Button>
//              </Box>
//            </Box>
//         </ModalBox>
//       </Modal>

//       {/* Edit User Modal */}
//       <Modal
//         open={openEditModal}
//         onClose={handleCloseEdit}
//         aria-labelledby="edit-user-modal-title"
//       >
//         <ModalBox>
//             <Typography id="edit-user-modal-title" variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
//               Edit User Details
//             </Typography>
//             {/* Add Alert here for edit errors if needed: {errorEdit && <Alert...>} */}
//             {editUser && ( // Only render form if editUser is set
//               <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
//                 {/* Full Name field - remove if not editable/available */}
//                 <TextField
//                   label="Full Name"
//                   name="fullName"
//                   value={editUser.fullName || ''}
//                   onChange={handleEditInputChange}
//                   fullWidth
//                   required
//                   variant="outlined"
//                   // disabled={loadingEdit} // Add loading state if implementing API
//                   sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//                 />
//                 <TextField
//                   label="Email Address"
//                   name="email"
//                   value={editUser.email || ''}
//                   onChange={handleEditInputChange}
//                   type="email"
//                   fullWidth
//                   required
//                   variant="outlined"
//                   // disabled={loadingEdit}
//                   sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//                 />
//                 <TextField
//                   select
//                   label="Role"
//                   name="role"
//                   value={editUser.role || ''}
//                   onChange={handleEditInputChange}
//                   fullWidth
//                   required
//                   variant="outlined"
//                   // disabled={loadingEdit}
//                   sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//                 >
//                   {/* Ensure these values match your backend roles */}
//                   <MenuItem value="admin">Admin</MenuItem>
//                   <MenuItem value="editor">Editor</MenuItem>
//                   <MenuItem value="viewer">Viewer</MenuItem>
//                   <MenuItem value="member">Member</MenuItem>
//                 </TextField>
//                 <TextField
//                   label="Password"
//                   value="Cannot be changed here"
//                   disabled
//                   fullWidth
//                   variant="outlined"
//                   helperText="Password management requires a separate process."
//                   InputProps={{ readOnly: true }}
//                   sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//                 />
//                 {/* Modal Action Buttons */}
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 3 }}>
//                    <Button
//                      variant="outlined"
//                      onClick={handleCloseEdit}
//                      // disabled={loadingEdit}
//                      sx={{ borderRadius: '8px' }}
//                    >
//                      Cancel
//                    </Button>
//                    <Button
//                      variant="contained"
//                      color="primary"
//                      onClick={handleUpdateUser} // Calls placeholder function
//                      // disabled={loadingEdit}
//                      sx={{ borderRadius: '8px', boxShadow: 3, minWidth: 140 }}
//                      // startIcon={loadingEdit ? <CircularProgress size={20} color="inherit" /> : null}
//                    >
//                      {/* {loadingEdit ? 'Saving...' : 'Save Changes'} */}
//                      Save Changes
//                    </Button>
//                 </Box>
//               </Box>
//             )}
//          </ModalBox>
//       </Modal>

//     </Container>
//   );
// };

// export default ManageUsers;