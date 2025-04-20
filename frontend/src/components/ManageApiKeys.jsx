import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Dialog, // Re-added Dialog
  DialogTitle, // Re-added
  DialogContent, // Re-added
  // DialogContentText, // Not needed for update form
  DialogActions, // Re-added
  TextField, // Re-added for update form
  Box,
  Divider,
  IconButton,
  Tooltip,
  CircularProgress,
  Alert,
  Collapse,
  Skeleton, // Added for loading state
  Chip, // Added for displaying model
  InputAdornment, // Added for password visibility toggle
  MenuItem, // Added for Select dropdown
  Select, // Added for Provider selection
  FormControl, // Added for Select
  InputLabel, // Added for Select
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import KeyIcon from '@mui/icons-material/Key';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RefreshIcon from '@mui/icons-material/Refresh'; // Added for refetching
import EditIcon from '@mui/icons-material/Edit'; // Added for Update button
import SaveIcon from '@mui/icons-material/Save'; // Added for save button
import CancelIcon from '@mui/icons-material/Cancel'; // Added for cancel button
import Visibility from '@mui/icons-material/Visibility'; // Added for password toggle
import VisibilityOff from '@mui/icons-material/VisibilityOff'; // Added for password toggle

// --- Constants ---
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'; // Adjust if needed
const API_KEY = '123'; // IMPORTANT: Use environment variables!
const LOCAL_STORAGE_KEY_TOKEN = 'token';
// Define known providers for the dropdown
const KNOWN_PROVIDERS = ["GEMINI", "GROQ", "OLLAMA"]; // Add more as needed

// --- Styled Components (Mostly unchanged) ---
const ApiKeyCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '750px', // Slightly adjusted width
  minHeight: '200px', // Adjusted min height
  background: `linear-gradient(140deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(theme.palette.background.paper, 0.8)} 100%)`,
  backdropFilter: 'blur(5px)',
  borderRadius: '16px', // More rounded
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden', // Ensure content respects border radius
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.15)}`,
  },
}));

const CardHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    background: alpha(theme.palette.primary.main, 0.05),
    borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
}));

const CardBody = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(3, 4), // Adjust padding
    flexGrow: 1,
}));

const CardFooter = styled(CardActions)(({ theme }) => ({
    justifyContent: 'flex-end',
    padding: theme.spacing(1.5, 3),
    borderTop: `1px solid ${theme.palette.divider}`,
    background: alpha(theme.palette.grey[100], 0.5),
}));

const InfoRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '&:last-child': {
        marginBottom: 0,
    },
}));

const InfoLabel = styled(Typography)(({ theme }) => ({
    fontWeight: '600',
    color: theme.palette.text.secondary,
    minWidth: '80px', // Ensure alignment
    marginRight: theme.spacing(2),
}));

const InfoValue = styled(Typography)(({ theme }) => ({
    fontWeight: '500',
    color: theme.palette.text.primary,
    wordBreak: 'break-all', // Allow long keys/models to wrap
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));


// --- Component ---
const ManageApiKeys = () => {
  const navigate = useNavigate();
  const [apiKeyConfig, setApiKeyConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState(null);
  const messageTimeoutRef = useRef(null);

  // --- State for Update Modal ---
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateConfigData, setUpdateConfigData] = useState({
    provider: '',
    model: '',
    api_key: '',
    // base_url: '', // Add if needed for OLLAMA
  });
  const [isUpdating, setIsUpdating] = useState(false); // Loading state for update operation
  const [updateError, setUpdateError] = useState(''); // Error specific to update modal
  const [showApiKey, setShowApiKey] = useState(false); // State for password visibility

  // --- Fetch API Key Configuration Function (Unchanged) ---
  const fetchApiKeyConfig = useCallback(async () => {
    setIsLoading(true);
    setFetchError(null);
    // Keep message on manual refresh
    // setMessage(null);

    const token = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN);
    if (!token) {
      setFetchError("Authentication token not found. Please log in again.");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/get-llm-api-key`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-API-Key': API_KEY,
        },
      });
      if (response.status === 404) {
          setApiKeyConfig(null);
          setIsLoading(false);
          return;
      }
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || `HTTP error! status: ${response.status}`);
      if (data.status === 'success' && data.data) {
        setApiKeyConfig(data.data);
      } else {
        throw new Error(data.message || "Failed to fetch API key: Invalid response format.");
      }
    } catch (error) {
      console.error("Error fetching API key config:", error);
      setFetchError(`Failed to load API key configuration: ${error.message}. Please try again.`);
      setApiKeyConfig(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // --- Effect to Fetch Data on Mount ---
  useEffect(() => {
    fetchApiKeyConfig();
  }, [fetchApiKeyConfig]);

  // --- Effect to clear general message ---
  useEffect(() => {
    if (message) {
      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
      messageTimeoutRef.current = setTimeout(() => setMessage(null), 5000);
    }
    return () => {
      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
    };
  }, [message]);

  // --- Navigation ---
  const handleBackToDashboard = () => navigate('/adminDashboard');

  // --- Copy Handler (Unchanged) ---
  const handleCopyApiKey = (keyToCopy) => {
    if (!keyToCopy) return;
    navigator.clipboard.writeText(keyToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy API key: ', err);
      setMessage({ severity: 'error', text: 'Failed to copy API key to clipboard.' });
    });
  };

  // --- Masking Function (Unchanged) ---
  const maskApiKey = (key) => {
    if (!key) return '••••••••';
    if (key.length <= 8) return '••••••••';
    const prefixMatch = key.match(/^([a-zA-Z0-9]+_)/);
    const prefix = prefixMatch ? prefixMatch[0] : '';
    const keyBody = prefix ? key.substring(prefix.length) : key;
    if (keyBody.length <= 8) return prefix + '••••••••';
    return prefix + keyBody.substring(0, 4) + '••••••••••••••••' + keyBody.substring(keyBody.length - 4);
  };

  // --- Update Modal Handlers ---
  const handleOpenUpdateModal = () => {
    // Pre-fill the form with current data or defaults
    setUpdateConfigData({
      provider: apiKeyConfig?.provider || KNOWN_PROVIDERS[0], // Default to first known provider
      model: apiKeyConfig?.model || '',
      api_key: apiKeyConfig?.config?.api_key || '',
      // base_url: apiKeyConfig?.config?.base_url || '', // Add if needed
    });
    setUpdateError(''); // Clear previous errors
    setShowApiKey(false); // Hide API key initially
    setOpenUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setOpenUpdateModal(false);
    setUpdateError('');
    setIsUpdating(false); // Reset loading state if cancelled
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateConfigData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickShowApiKey = () => setShowApiKey((show) => !show);
  const handleMouseDownApiKey = (event) => event.preventDefault(); // Prevent focus shift on icon click

  // --- API Call: Update/Set API Key Configuration ---
  const handleSaveChanges = async () => {
    // Basic client-side validation
    if (!updateConfigData.provider) {
      setUpdateError('Provider is required.');
      return;
    }
    if (!updateConfigData.model.trim()) {
      setUpdateError('Model is required.');
      return;
    }
    // API key might be optional for some providers (like OLLAMA locally)
    // Add specific checks if needed, e.g., for OLLAMA base_url
    if (updateConfigData.provider !== 'OLLAMA' && !updateConfigData.api_key.trim()) {
        setUpdateError('API Key is required for this provider.');
        return;
    }

    setIsUpdating(true);
    setUpdateError('');
    setMessage(null); // Clear general messages

    const token = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN);
    if (!token) {
      setUpdateError("Authentication error. Please log in again.");
      setIsUpdating(false);
      return;
    }

    // Construct payload based on API requirements
    // Ensure only relevant fields are sent (e.g., don't send api_key if provider is OLLAMA and it's empty)
    const payload = {
      provider: updateConfigData.provider,
      model: updateConfigData.model.trim(),
      // Conditionally include api_key
      ...(updateConfigData.api_key.trim() && { api_key: updateConfigData.api_key.trim() }),
      // base_url: updateConfigData.base_url.trim(), // Include if needed
    };

    // Remove api_key explicitly if provider is OLLAMA and key is empty (or handle on backend)
    if (payload.provider === 'OLLAMA' && !payload.api_key) {
        delete payload.api_key;
    }


    console.log('Attempting to set/update API key with payload:', payload);

    try {
      const response = await fetch(`${API_BASE_URL}/set-llm-api-key`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-API-Key': API_KEY,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        // Use detail from API response if available (e.g., connection errors)
        throw new Error(data.detail || `HTTP error! status: ${response.status}`);
      }

      if (data.status === 'success') {
        // --- Update Successful ---
        setMessage({ severity: 'success', text: data.message || `API Key configuration updated successfully!` });
        handleCloseUpdateModal(); // Close the modal
        fetchApiKeyConfig(); // Re-fetch the data to display the updated config
      } else {
        // Should be caught by !response.ok, but as a fallback
        throw new Error(data.message || "Failed to update API key: Invalid response from server.");
      }

    } catch (error) {
      console.error("Error updating API key config:", error);
      // Display error within the modal
      setUpdateError(`Update failed: ${error.message}`);
    } finally {
      setIsUpdating(false); // Reset loading state
    }
  };


  // --- Render Content Logic ---
  const renderContent = () => {
    // 1. Loading State
    if (isLoading) {
      return (
        <ApiKeyCard>
          <CardHeader>
             <Skeleton variant="circular" width={36} height={36} sx={{ mr: 2 }} />
             <Skeleton variant="text" width="40%" height={40} />
          </CardHeader>
          <CardBody>
            <InfoRow>
                <InfoLabel><Skeleton variant="text" width={80} /></InfoLabel>
                <InfoValue><Skeleton variant="text" width="70%" /></InfoValue>
            </InfoRow>
             <InfoRow>
                <InfoLabel><Skeleton variant="text" width={80} /></InfoLabel>
                <InfoValue><Skeleton variant="text" width="90%" /></InfoValue>
            </InfoRow>
          </CardBody>
          <CardFooter>
             <Skeleton variant="rounded" width={180} height={40} /> {/* Match button size */}
          </CardFooter>
        </ApiKeyCard>
      );
    }

    // 2. Error State
    if (fetchError) {
      return (
        <Alert severity="error" action={
          <Button color="inherit" size="small" onClick={fetchApiKeyConfig} startIcon={<RefreshIcon />}>
            Retry
          </Button>
        } sx={{ width: '100%', maxWidth: '750px' }}>
          {fetchError}
        </Alert>
      );
    }

    // 3. No Configuration State
    if (!apiKeyConfig) {
      return (
        <Box sx={{ textAlign: 'center', p: 4, border: `1px dashed ${alpha('#000', 0.1)}`, borderRadius: '12px', background: alpha('#000', 0.02), width: '100%', maxWidth: '750px' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No LLM API Key Configured
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            You need to configure an API key to enable LLM features.
          </Typography>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={handleOpenUpdateModal} // Open the update modal directly
          >
            Configure API Key
          </Button>
        </Box>
      );
    }

    // 4. Display Configuration State
    const { provider, model, config } = apiKeyConfig;
    const apiKey = config?.api_key; // Safely access api_key

    return (
      <ApiKeyCard>
        {/* Card Header with Provider */}
        <CardHeader>
          <KeyIcon color="primary" sx={{ fontSize: 36, mr: 2 }} />
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '1.6rem' }}>
            {provider || 'Unknown Provider'}
          </Typography>
        </CardHeader>

        {/* Card Body with Details */}
        <CardBody>
          {/* Model Row */}
          <InfoRow>
            <InfoLabel>Model:</InfoLabel>
            <InfoValue>
              <Chip label={model || 'Not Specified'} size="small" variant='outlined' />
            </InfoValue>
          </InfoRow>

          {/* API Key Row */}
          <InfoRow>
            <InfoLabel>API Key:</InfoLabel>
            <InfoValue>
              <Typography
                variant="body1"
                sx={{ fontFamily: 'monospace', fontSize: '1.1em', mr: 1 }}
              >
                {maskApiKey(apiKey)}
              </Typography>
              {apiKey && ( // Only show copy button if key exists
                <Tooltip title={copied ? "Copied!" : "Copy API Key"} placement="top">
                  <IconButton size="small" onClick={() => handleCopyApiKey(apiKey)} color={copied ? "success" : "primary"}>
                    {copied ? <CheckCircleOutlineIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                  </IconButton>
                </Tooltip>
              )}
            </InfoValue>
          </InfoRow>

          {/* Add other config details if needed (e.g., base_url for OLLAMA) */}
          {/* {config?.base_url && (
             <InfoRow>
                <InfoLabel>Base URL:</InfoLabel>
                <InfoValue>{config.base_url}</InfoValue>
             </InfoRow>
          )} */}

        </CardBody>

        {/* Card Footer with Actions */}
        <CardFooter>
          <Button
            size="medium"
            color="primary"
            variant="contained" // Make update more prominent
            startIcon={<EditIcon />}
            onClick={handleOpenUpdateModal} // Open the update modal
            sx={{ textTransform: 'none', fontSize: '0.95rem' }}
          >
            Update Configuration
          </Button>
        </CardFooter>
      </ApiKeyCard>
    );
  };

  // --- Main JSX ---
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>
        Manage LLM API Key
      </Typography>

      {/* General Message Alert Area */}
      <Box sx={{ width: '100%', maxWidth: '750px', margin: '0 auto', mb: 3, minHeight: '50px' /* Prevent layout shift */ }}>
        <Collapse in={!!message}>
          {message && (
            <Alert
              severity={message.severity}
              onClose={() => setMessage(null)}
              sx={{ width: '100%'}}
            >
              {message.text}
            </Alert>
          )}
        </Collapse>
      </Box>

      {/* Back Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
         {/* Removed Add Button */}
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleBackToDashboard} sx={{ textTransform: 'none', fontWeight: 'bold' }}>
          Back to Dashboard
        </Button>
      </Box>

      {/* Main Content Area (Card or Message) */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {renderContent()}
      </Box>

      {/* --- Update API Key Dialog --- */}
      <Dialog open={openUpdateModal} onClose={handleCloseUpdateModal} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Update LLM Configuration</DialogTitle>
        <DialogContent>
          {/* Update Error Alert */}
          {updateError && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }} onClose={() => setUpdateError('')}>
              {updateError}
            </Alert>
          )}
          {/* Provider Selection */}
          <FormControl fullWidth margin="dense" variant="outlined" sx={{ mb: 2, mt: 1 }} disabled={isUpdating}>
             <InputLabel id="provider-select-label">Provider</InputLabel>
             <Select
                labelId="provider-select-label"
                id="provider-select"
                name="provider"
                value={updateConfigData.provider}
                onChange={handleUpdateInputChange}
                label="Provider"
                required // Mark as required visually
             >
                {KNOWN_PROVIDERS.map((prov) => (
                    <MenuItem key={prov} value={prov}>{prov}</MenuItem>
                ))}
             </Select>
          </FormControl>
          {/* Model Input */}
          <TextField
            margin="dense" name="model" label="Model Name" type="text" fullWidth variant="outlined"
            value={updateConfigData.model} onChange={handleUpdateInputChange} sx={{ mb: 2 }} disabled={isUpdating}
            required // Mark as required visually
          />
          {/* API Key Input */}
          <TextField
            margin="dense" name="api_key" label="API Key"
            // Conditionally required based on provider (client-side hint)
            required={updateConfigData.provider !== 'OLLAMA'}
            type={showApiKey ? 'text' : 'password'} // Toggle visibility
            fullWidth variant="outlined" value={updateConfigData.api_key} onChange={handleUpdateInputChange} sx={{ mb: 2 }} disabled={isUpdating}
            helperText={updateConfigData.provider === 'OLLAMA' ? 'API Key is optional for local OLLAMA.' : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle api key visibility"
                    onClick={handleClickShowApiKey}
                    onMouseDown={handleMouseDownApiKey}
                    edge="end"
                  >
                    {showApiKey ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* Add Base URL field if needed for OLLAMA */}
          {/* {updateConfigData.provider === 'OLLAMA' && (
             <TextField margin="dense" name="base_url" label="Base URL (for OLLAMA)" type="text" fullWidth variant="outlined" value={updateConfigData.base_url} onChange={handleUpdateInputChange} sx={{ mb: 2 }} disabled={isUpdating} required />
          )} */}

        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleCloseUpdateModal} color="inherit" disabled={isUpdating} startIcon={<CancelIcon />}>
            Cancel
          </Button>
          <Button
            onClick={handleSaveChanges} // Trigger the API call
            variant="contained" color="primary"
            // Disable button based on loading state and required fields
            disabled={isUpdating || !updateConfigData.provider || !updateConfigData.model.trim() || (updateConfigData.provider !== 'OLLAMA' && !updateConfigData.api_key.trim())}
            startIcon={isUpdating ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
          >
            {isUpdating ? 'Saving...' : 'Save Changes'}
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
};

export default ManageApiKeys;