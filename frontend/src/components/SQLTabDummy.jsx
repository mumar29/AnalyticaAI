import React, { useState, useEffect } from 'react';
import {
  Box, Button, Modal, TextField, Card, CardContent, Typography, Chip, MenuItem, IconButton,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Fade,
  Tooltip,
  Grid,
  CircularProgress,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StorageIcon from '@mui/icons-material/Storage';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
// --- Icons for database types ---
import CloudQueueIcon from '@mui/icons-material/CloudQueue'; // For Supabase (cloud-like)
import DatasetIcon from '@mui/icons-material/Dataset'; // For PostgreSQL (generic data)
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked'; // For MySQL (generic data variant)
import TableViewIcon from '@mui/icons-material/TableView'; // For SQL Server (table structure)

// --- Styled Components ---
const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  maxHeight: '90vh',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[12],
  padding: theme.spacing(4),
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
}));

const DatabaseCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  borderRadius: theme.shape.borderRadius * 2,
  border: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  background: 'linear-gradient(145deg, #ffffff, #f9f9f9)',
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
  '&:hover': {
    transform: 'translateY(-5px) scale(1.01)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
  },
}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 1.5,
  textTransform: 'none',
  padding: theme.spacing(1, 2.5),
  boxShadow: theme.shadows[2],
  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-1px)',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 1.5,
  textTransform: 'none',
  padding: theme.spacing(0.75, 2),
  fontSize: '0.85rem',
  transition: 'all 0.2s ease',
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(5),
}));

const DbTypeButton = styled(Button)(({ theme, selected }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1.5),
  height: 100,
  width: '100%',
  borderRadius: theme.shape.borderRadius * 1.5,
  border: `2px solid ${selected ? theme.palette.primary.main : theme.palette.divider}`,
  backgroundColor: selected ? alpha(theme.palette.primary.main, 0.1) : theme.palette.background.paper,
  transition: 'border-color 0.2s ease, background-color 0.2s ease',
  color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
  '&:hover': {
    borderColor: theme.palette.primary.light,
    backgroundColor: selected ? alpha(theme.palette.primary.main, 0.15) : alpha(theme.palette.action.hover, 0.04),
  },
  '& .MuiButton-startIcon > *:nth-of-type(1)': {
    fontSize: '2rem',
    marginBottom: theme.spacing(0.5),
  },
}));

const KeyValue = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(1),
  width: '100%',
}));

const KeyLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
  fontWeight: 'medium',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(0.5),
}));

const ValueText = styled(Typography)(({ theme }) => ({
  fontFamily: 'monospace',
  backgroundColor: alpha(theme.palette.background.default, 0.6),
  padding: theme.spacing(1, 1.5),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.9rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    backgroundColor: alpha(theme.palette.background.default, 0.9),
  }
}));

const TableAccessContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const AccessChip = styled(Chip)(({ theme, access }) => {
  let paletteColorKey = 'grey'; // Use 'grey' for default styling
  let specificColorMain = theme.palette.grey[700]; // Default main color (dark grey)
  let specificColorBg = theme.palette.grey[500]; // Default background base (medium grey)

  switch (access?.toLowerCase()) {
    case 'admin':
      paletteColorKey = 'error';
      break;
    case 'member':
      paletteColorKey = 'success';
      break;
    case 'restricted':
      paletteColorKey = 'warning';
      break;
    // No default case needed here, we initialized above
  }

  // Safely get colors, providing fallbacks if theme colors are missing
  // This prevents errors if e.g., theme.palette.error is undefined
  const colorConfig = theme.palette[paletteColorKey] || {};
  specificColorMain = colorConfig.main || specificColorMain; // Use theme color if available, else fallback
  // Use main color for background alpha calculation for simplicity and consistency
  specificColorBg = colorConfig.main || specificColorBg;


  // Handle the 'default' case where paletteColorKey remains 'grey'
  if (paletteColorKey === 'grey') {
      // Use specific grey shades for default, or adjust as needed
      specificColorMain = theme.palette.text.secondary; // Example: Use secondary text color
      specificColorBg = theme.palette.action.selected; // Example: Use a subtle action background
       return {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(specificColorBg, 0.15), // Slightly different alpha for default?
            color: specificColorMain,
            border: `1px solid ${alpha(specificColorMain, 0.2)}`, // Subtle border for default
            fontWeight: 400, // Maybe less emphasis for default
            // Override MUI Chip's default color prop behavior if needed
            // color: undefined, // Prevent Chip from applying its own default color styles
            // '.MuiChip-label': { color: specificColorMain }, // Target label specifically
       };
  }


  // Styles for 'admin', 'member', 'restricted'
  return {
    borderRadius: theme.shape.borderRadius,
    // Use the determined main color (or its fallback) for alpha background
    backgroundColor: alpha(specificColorBg, 0.1),
    // Use the determined main color (or its fallback) for text and border
    color: specificColorMain,
    border: `1px solid ${alpha(specificColorMain, 0.3)}`,
    fontWeight: 500,
  };
});
const AccessLevelIcon = ({ access }) => {
  switch(access?.toLowerCase()) {
    case 'admin':
      return <AdminPanelSettingsIcon fontSize="small" color="error" />;
    case 'member':
      return <PersonIcon fontSize="small" color="success" />;
    case 'restricted':
      return <LockIcon fontSize="small" color="warning" />;
    default:
      return <LockOpenIcon fontSize="small" />;
  }
};

// --- Component ---
const SQLTab = () => {
  const navigate = useNavigate();
  const [openConnectDbModal, setOpenConnectDbModal] = useState(false);
  const [databases, setDatabases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDbType, setSelectedDbType] = useState(null);
  const [tableAccessData, setTableAccessData] = useState({});
  const [loadingTableAccess, setLoadingTableAccess] = useState({});
  const [errorTableAccess, setErrorTableAccess] = useState({});
  const [expandedDb, setExpandedDb] = useState(null);
  const [dbDetails, setDbDetails] = useState({
    supabaseKey: '',
    supabaseUrl: '',
    dbName: '',
    port: '',
    username: '',
    password: '',
    host: '',
  });

  // API URLs
  const API_URL = 'http://127.0.0.1:8000/api/v1/get-sql-database';
  const TABLE_ACCESS_API_URL = 'http://127.0.0.1:8000/api/v1/get-table-access-level';

  // Fetch databases from the API
  useEffect(() => {
    const fetchDatabases = async () => {
      try {
        setLoading(true);
        
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('Authentication token not found. Please log in again.');
        }
        
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'X-API-Key': '123'
          }
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Server responded with status ${response.status}: ${errorText}`);
        }
        
        const result = await response.json();
        
        if (result.status === 'success') {
          setDatabases(result.data);
        } else {
          throw new Error(result.message || 'Failed to fetch databases');
        }
      } catch (err) {
        console.error('Error fetching databases:', err);
        setError(err.message);
        
        // For development - set some mock data when API fails
       
      } finally {
        setLoading(false);
      }
    };

    fetchDatabases();
  }, []);

  const fetchTableAccessLevels = async (dbName) => {
    try {
      setLoadingTableAccess(prev => ({ ...prev, [dbName]: true }));
      setErrorTableAccess(prev => ({ ...prev, [dbName]: null }));
      
      // Get token from localStorage
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Authentication token not found. Please log in again.');
      }
      
      const response = await fetch(`${TABLE_ACCESS_API_URL}?db_name=${encodeURIComponent(dbName)}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-API-Key': '123'
        },
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server responded with status ${response.status}: ${errorText}`);
      }
      
      const result = await response.json();
      
      if (result.status === 'success') {
        setTableAccessData(prev => ({ ...prev, [dbName]: result.data }));
      } else {
        throw new Error(result.message || 'Failed to fetch table access levels');
      }
    } catch (err) {
      console.error(`Error fetching table access levels for ${dbName}:`, err);
      setErrorTableAccess(prev => ({ ...prev, [dbName]: err.message }));
    } finally {
      setLoadingTableAccess(prev => ({ ...prev, [dbName]: false }));
    }
  };

  const handleOpenConnectDb = () => setOpenConnectDbModal(true);
  
  const handleCloseConnectDb = () => {
    setOpenConnectDbModal(false);
    setSelectedDbType(null);
    setDbDetails({
      supabaseKey: '', supabaseUrl: '', dbName: '', port: '',
      username: '', password: '', host: '',
    });
  };

  const handleDbTypeSelect = (type) => {
    setSelectedDbType(type);
    setDbDetails({
      supabaseKey: '', supabaseUrl: '', dbName: '', port: '',
      username: '', password: '', host: '',
    });
  };

  const handleDetailInputChange = (e) => {
    const { name, value } = e.target;
    setDbDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleConnectDb = async () => {
    let connectionData = { type: selectedDbType };
    let isValid = false;
    
    if (selectedDbType === 'supabase') {
      if (dbDetails.supabaseUrl.trim() && dbDetails.supabaseKey.trim()) {
        connectionData = { 
          type: selectedDbType,
          dbname: dbDetails.dbName.trim() || 'default-db',
          config: {
            supabase_url: dbDetails.supabaseUrl.trim(),
            supabase_key: dbDetails.supabaseKey.trim()
          }
        };
        isValid = true;
      }
    } else if (['postgresql', 'mysql', 'sqlserver'].includes(selectedDbType)) {
      if (dbDetails.dbName.trim() && dbDetails.port.trim() && dbDetails.username.trim() && dbDetails.password.trim() && dbDetails.host.trim()) {
        connectionData = {
          type: selectedDbType,
          dbname: dbDetails.dbName.trim(),
          config: {
            host: dbDetails.host.trim(),
            port: dbDetails.port.trim(),
            user: dbDetails.username.trim(),
            password: dbDetails.password.trim()
          }
        };
        isValid = true;
      }
    }

    if (isValid) {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('Authentication token not found. Please log in again.');
        }
        
        // For now, we're just simulating a successful API call
        console.log("Would connect with:", connectionData);
        
        // TODO: Implement actual API call to save the database configuration
        // const response = await fetch('API_ENDPOINT_TO_SAVE_DB', {
        //   method: 'POST',
        //   headers: {
        //     'Authorization': `Bearer ${token}`,
        //     'Content-Type': 'application/json',
        //     'X-API-Key': process.env.REACT_APP_API_KEY || 'default-api-key'
        //   },
        //   body: JSON.stringify(connectionData)
        // });
        
        // if (!response.ok) {
        //   throw new Error(`Failed to save database configuration (${response.status})`);
        // }
        
        // const result = await response.json();
        
        // In the meantime, just add it to our state
        setDatabases(prev => [...prev, connectionData]);
        
        alert(`Database connection successful for ${selectedDbType}!`);
        handleCloseConnectDb();
      } catch (err) {
        console.error('Error connecting database:', err);
        alert(`Failed to connect database: ${err.message}`);
      }
    } else {
      alert(`Please fill in all required fields for ${selectedDbType}.`);
    }
  };

  const handleBackToDashboard = () => {
    navigate('/adminDashboard');
  };

  const handleViewTableAccess = (dbName) => {
    if (expandedDb === dbName) {
      setExpandedDb(null);
    } else {
      setExpandedDb(dbName);
      if (!tableAccessData[dbName] && !loadingTableAccess[dbName]) {
        fetchTableAccessLevels(dbName);
      }
    }
  };

  const getDbIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'supabase': return <CloudQueueIcon color="primary" sx={{ fontSize: 30 }} />;
      case 'postgresql': return <DatasetIcon color="primary" sx={{ fontSize: 30 }} />;
      case 'mysql': return <DatasetLinkedIcon color="primary" sx={{ fontSize: 30 }} />;
      case 'sqlserver': return <TableViewIcon color="primary" sx={{ fontSize: 30 }} />;
      default: return <StorageIcon color="primary" sx={{ fontSize: 30 }} />;
    }
  };

  const isConnectDisabled = () => {
    if (!selectedDbType) return true;
    if (selectedDbType === 'supabase') {
      return !dbDetails.supabaseKey.trim() || !dbDetails.supabaseUrl.trim();
    }
    if (['postgresql', 'mysql', 'sqlserver'].includes(selectedDbType)) {
      return !dbDetails.dbName.trim() || !dbDetails.port.trim() || !dbDetails.username.trim() || !dbDetails.password.trim() || !dbDetails.host.trim();
    }
    return true;
  };

  // Helper to mask sensitive information
  const maskString = (str, showChars = 4) => {
    if (!str) return '';
    if (str.length <= showChars * 2) return '••••••';
    return str.substring(0, showChars) + '•'.repeat(Math.min(20, str.length - (showChars * 2))) + str.substring(str.length - showChars);
  };

  // Helper to copy to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  // Function to render database configuration details
  const renderDbConfig = (db) => {
    const { type, dbname, config } = db;
    
    switch (type?.toLowerCase()) {
      case 'supabase':
        return (
          <>
            <KeyValue>
              <KeyLabel>Database Name</KeyLabel>
              <ValueText>{dbname}</ValueText>
            </KeyValue>
            <KeyValue>
              <KeyLabel>Supabase URL</KeyLabel>
              <ValueText onClick={() => copyToClipboard(config.supabase_url)}>
                {config.supabase_url}
              </ValueText>
            </KeyValue>
            <KeyValue>
              <KeyLabel>Supabase Key</KeyLabel>
              <ValueText onClick={() => copyToClipboard(config.supabase_key)}>
                {maskString(config.supabase_key, 6)}
              </ValueText>
            </KeyValue>
          </>
        );
      case 'postgresql':
      case 'mysql':
      case 'sqlserver':
        return (
          <>
            <KeyValue>
              <KeyLabel>Database Name</KeyLabel>
              <ValueText>{dbname}</ValueText>
            </KeyValue>
            <KeyValue>
              <KeyLabel>Host</KeyLabel>
              <ValueText onClick={() => copyToClipboard(config.host)}>
                {config.host}
              </ValueText>
            </KeyValue>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <KeyValue>
                  <KeyLabel>Port</KeyLabel>
                  <ValueText>{config.port}</ValueText>
                </KeyValue>
              </Grid>
              <Grid item xs={6}>
                <KeyValue>
                  <KeyLabel>User</KeyLabel>
                  <ValueText>{config.user}</ValueText>
                </KeyValue>
              </Grid>
            </Grid>
          </>
        );
      default:
        return <Typography>Configuration details not available</Typography>;
    }
  };

  // Function to render table access section
  const renderTableAccess = (dbName) => {
    const isExpanded = expandedDb === dbName;
    const isLoading = loadingTableAccess[dbName];
    const error = errorTableAccess[dbName];
    const tableData = tableAccessData[dbName];
    
    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <ActionButton
            color="primary"
            variant={isExpanded ? "contained" : "outlined"}
            endIcon={isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            onClick={() => handleViewTableAccess(dbName)}
            startIcon={<VisibilityIcon />}
          >
            {isExpanded ? "Hide Tables" : "View Table Access"}
          </ActionButton>
        </Box>
        
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <TableAccessContainer>
            <Typography variant="subtitle1" fontWeight="medium" mb={2}>
              Table Access Levels
            </Typography>
            
            {isLoading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <CircularProgress size={24} />
              </Box>
            )}
            
            {error && (
              <Box sx={{ 
                p: 2, 
                borderRadius: 1, 
                bgcolor: alpha('#f44336', 0.08),
                border: '1px solid',
                borderColor: 'error.light',
                color: 'error.main'
              }}>
                <Typography>{error}</Typography>
              </Box>
            )}
            
            {!isLoading && !error && tableData && tableData.length > 0 && (
              <TableContainer component={Paper} elevation={0} variant="outlined">
                <Table size="small">
                  <TableHead sx={{ bgcolor: alpha('#f5f5f5', 0.6) }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Table Name</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>Access Level</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((table, index) => (
                      <TableRow key={index} sx={{ '&:nth-of-type(odd)': { bgcolor: alpha('#f9f9f9', 0.4) } }}>
                        <TableCell component="th" scope="row" sx={{ fontFamily: 'monospace' }}>
                          {table.table_name}
                        </TableCell>
                        <TableCell align="right">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                            <AccessLevelIcon access={table.access_level} />
                            <AccessChip 
                              access={table.access_level}
                              label={table.access_level}
                              size="small"
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
            
            {!isLoading && !error && (!tableData || tableData.length === 0) && (
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography color="text.secondary">No table access data available</Typography>
              </Box>
            )}
          </TableAccessContainer>
        </Collapse>
      </>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: 'text.primary', textAlign: 'center' }}>
        Manage Databases
      </Typography>

      <ButtonContainer>
        <StyledButton variant="outlined" color="primary" onClick={handleBackToDashboard} startIcon={<ArrowBackIcon />}>
          Back to Dashboard
        </StyledButton>
        <StyledButton variant="contained" color="secondary" startIcon={<AddIcon />} onClick={handleOpenConnectDb}>
          Connect New Database
        </StyledButton>
      </ButtonContainer>

      {/* Loading and Error States */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}
      
      {error && !databases.length && (
        <Box sx={{ 
          backgroundColor: alpha('#f44336', 0.1), 
          color: 'error.main', 
          p: 3, 
          borderRadius: 2, 
          width: '100%', 
          maxWidth: '800px',
          mb: 3,
          border: '1px solid',
          borderColor: 'error.main',
        }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Error Loading Databases</Typography>
          <Typography>{error}</Typography>
        </Box>
      )}

      {/* Database List */}
      {!loading && !error && databases.length === 0 && (
        <Box sx={{ textAlign: 'center', my: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, width: '100%', maxWidth: '800px', boxShadow: 1 }}>
          <Typography variant="h6" color="text.secondary">No databases connected yet</Typography>
          <Typography color="text.secondary">Connect your first database by clicking the button above</Typography>
        </Box>
      )}

      {/* Display Database Cards */}
      {databases.map((db, index) => (
        <DatabaseCard key={index}>
          <CardHeader>
            {getDbIcon(db.type)}
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary', flexGrow: 1 }}>
              {db.dbname || 'Unnamed Database'} 
              <Chip 
                label={db.type || 'Unknown'} 
                size="small" 
                color="primary" 
                variant="outlined"
                sx={{ ml: 1.5, textTransform: 'capitalize' }} 
              />
            </Typography>
          </CardHeader>
          <CardContent sx={{ pt: 2, pb: '16px !important' }}>
            {renderDbConfig(db)}
            {/* Table Access Section */}
            {renderTableAccess(db.dbname)}
          </CardContent>
        </DatabaseCard>
      ))}

      {/* Connect Database Modal */}
      <Modal
        open={openConnectDbModal}
        onClose={handleCloseConnectDb}
        closeAfterTransition
        aria-labelledby="connect-db-modal-title"
      >
        <Fade in={openConnectDbModal}>
          <ModalBox>
            <Typography id="connect-db-modal-title" variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center', mb: 3 }}>
              Connect New Database
            </Typography>

            {/* Database Type Selection */}
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'medium' }}>Select Database Type:</Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6} sm={3}>
                <DbTypeButton
                  selected={selectedDbType === 'supabase'}
                  onClick={() => handleDbTypeSelect('supabase')}
                  startIcon={<CloudQueueIcon />}
                >
                  Supabase
                </DbTypeButton>
              </Grid>
              <Grid item xs={6} sm={3}>
                <DbTypeButton
                  selected={selectedDbType === 'postgresql'}
                  onClick={() => handleDbTypeSelect('postgresql')}
                  startIcon={<DatasetIcon />}
                >
                  PostgreSQL
                </DbTypeButton>
              </Grid>
              <Grid item xs={6} sm={3}>
                <DbTypeButton
                  selected={selectedDbType === 'mysql'}
                  onClick={() => handleDbTypeSelect('mysql')}
                  startIcon={<DatasetLinkedIcon />}
                >
                  MySQL
                </DbTypeButton>
              </Grid>
              <Grid item xs={6} sm={3}>
                <DbTypeButton
                  selected={selectedDbType === 'sqlserver'}
                  onClick={() => handleDbTypeSelect('sqlserver')}
                  startIcon={<TableViewIcon />}
                >
                  SQL Server
                </DbTypeButton>
              </Grid>
            </Grid>

            {selectedDbType && <Divider sx={{ my: 2 }} />}

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Supabase Fields */}
              {selectedDbType === 'supabase' && (
                <Fade in={selectedDbType === 'supabase'} timeout={300}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      label="Database Name"
                      name="dbName"
                      value={dbDetails.dbName}
                      onChange={handleDetailInputChange}
                      fullWidth
                      variant="outlined"
                      InputProps={{ sx: { borderRadius: '8px' } }}
                      placeholder="Optional - defaults to organization name"
                    />
                    <TextField
                      label="Supabase URL"
                      name="supabaseUrl"
                      value={dbDetails.supabaseUrl}
                      onChange={handleDetailInputChange}
                      fullWidth required variant="outlined"
                      InputProps={{ sx: { borderRadius: '8px' } }}
                      autoFocus
                    />
                    <TextField
                      label="Supabase Key"
                      name="supabaseKey"
                      value={dbDetails.supabaseKey}
                      onChange={handleDetailInputChange}
                      fullWidth required variant="outlined"
                      InputProps={{ sx: { borderRadius: '8px' } }}
                    />
                  </Box>
                </Fade>
              )}

              {/* Common Fields for SQL DBs */}
              {['postgresql', 'mysql', 'sqlserver'].includes(selectedDbType) && (
                <Fade in={['postgresql', 'mysql', 'sqlserver'].includes(selectedDbType)} timeout={300}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      label="Host Address"
                      name="host"
                      value={dbDetails.host}
                      onChange={handleDetailInputChange}
                      fullWidth required variant="outlined"
                      InputProps={{ sx: { borderRadius: '8px' } }}
                      autoFocus
                    />
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <TextField
                          label="Port"
                          name="port"
                          type="number"
                          value={dbDetails.port}
                          onChange={handleDetailInputChange}
                          fullWidth required variant="outlined"
                          InputProps={{ sx: { borderRadius: '8px' } }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          label="Database Name"
                          name="dbName"
                          value={dbDetails.dbName}
                          onChange={handleDetailInputChange}
                          fullWidth required variant="outlined"
                          InputProps={{ sx: { borderRadius: '8px' } }}
                        />
                      </Grid>
                    </Grid>
                    <TextField
                      label="Username"
                      name="username"
                      value={dbDetails.username}
                      onChange={handleDetailInputChange}
                      fullWidth required variant="outlined"
                      InputProps={{ sx: { borderRadius: '8px' } }}
                    />
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      value={dbDetails.password}
                      onChange={handleDetailInputChange}
                      fullWidth required variant="outlined"
                      InputProps={{ sx: { borderRadius: '8px' } }}
                    />
                  </Box>
                </Fade>
              )}

              {/* Connect/Cancel Buttons - Only show if a type is selected */}
              {selectedDbType && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 3 }}>
                  <StyledButton variant="text" color="inherit" onClick={handleCloseConnectDb}>
                    Cancel
                  </StyledButton>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleConnectDb}
                    disabled={isConnectDisabled()}
                  >
                    Connect
                  </StyledButton>
                </Box>
              )}
            </Box>
          </ModalBox>
        </Fade>
      </Modal>
    </Container>
  );
};

export default SQLTab;