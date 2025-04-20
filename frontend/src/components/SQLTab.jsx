// // src/Components/SQLTab.jsx
// import React, { useState } from 'react';
// import { Box, Button, Modal, TextField, Card, CardContent, Typography, Chip, MenuItem, IconButton } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';

// // Styled Components
// const ModalBox = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90%',
//   maxWidth: { xs: 240, sm: 320 }, // Already reduced width
//   backgroundColor: '#fff',
//   borderRadius: '12px',
//   boxShadow: theme.shadows[10],
//   padding: theme.spacing(3),
//   outline: 'none',
// }));

// const DatabaseCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(2),
//   marginBottom: theme.spacing(2),
//   background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecef 100%)',
//   borderRadius: '12px',
//   boxShadow: theme.shadows[4],
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   '&:hover': {
//     transform: 'scale(1.02)',
//     boxShadow: theme.shadows[8],
//   },
//   width: '100%',
//   maxWidth: { xs: '100%', sm: 1100 }, // Already increased width
// }));

// const ButtonContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   gap: theme.spacing(2),
//   justifyContent: 'flex-end',
//   marginBottom: theme.spacing(4),
//   flexWrap: 'wrap',
// }));

// const SQLTab = () => {
//   const [openConnectDbModal, setOpenConnectDbModal] = useState(false);
//   const [databases, setDatabases] = useState([
//     { name: 'SalesDB', tables: ['Orders', 'Customers'], accessLevel: 'Private' },
//     { name: 'InventoryDB', tables: ['Products', 'Stock'], accessLevel: 'Restricted' },
//     { name: 'UserDB', tables: ['Users', 'Profiles'], accessLevel: 'Private' },
//     { name: 'AnalyticsDB', tables: ['Reports', 'Metrics'], accessLevel: 'Public' },
//     { name: 'OrdersDB', tables: ['Transactions', 'Payments'], accessLevel: 'Restricted' },
//     { name: 'HRDB', tables: ['Employees', 'Salaries'], accessLevel: 'Private' },
//     { name: 'MarketingDB', tables: ['Campaigns', 'Leads'], accessLevel: 'Public' },
//     { name: 'SupportDB', tables: ['Tickets', 'Responses'], accessLevel: 'Restricted' },
//     { name: 'FinanceDB', tables: ['Accounts', 'Budgets'], accessLevel: 'Private' },
//     { name: 'LogisticsDB', tables: ['Shipments', 'Tracking'], accessLevel: 'Public' },
//   ]);
//   const [newDb, setNewDb] = useState({ key: '', accessLevel: '' });

//   const handleOpenConnectDb = () => setOpenConnectDbModal(true);
//   const handleCloseConnectDb = () => setOpenConnectDbModal(false);

//   const handleDbInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewDb((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleConnectDb = () => {
//     if (newDb.key && newDb.accessLevel) {
//       setDatabases([...databases, { name: newDb.key, tables: ['Table1', 'Table2'], accessLevel: newDb.accessLevel }]);
//       setNewDb({ key: '', accessLevel: '' });
//       handleCloseConnectDb();
//     }
//   };

//   const handleDeleteDb = (index) => {
//     setDatabases(databases.filter((_, i) => i !== index));
//   };

//   return (
//     <Box>
//       <ButtonContainer>
//         <Button
//           variant="contained"
//           color="secondary"
//           startIcon={<AddIcon />}
//           sx={{ borderRadius: '8px', textTransform: 'none', boxShadow: 4 }}
//           onClick={handleOpenConnectDb}
//         >
//           Connect Database
//         </Button>
//       </ButtonContainer>

//       {databases.map((db, index) => (
//         <DatabaseCard key={index}>
//           <Box sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//               {db.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//               Tables: {db.tables.join(', ')}
//             </Typography>
//           </Box>
//           <Chip
//             label={db.accessLevel}
//             color="primary"
//             size="small"
//             sx={{ mx: 2, fontWeight: 'bold', bgcolor: 'primary.light', color: 'white' }}
//           />
//           <IconButton
//             color="error"
//             onClick={() => handleDeleteDb(index)}
//             sx={{ '&:hover': { bgcolor: 'error.light' } }}
//           >
//             <DeleteIcon />
//           </IconButton>
//         </DatabaseCard>
//       ))}

//       {/* Connect Database Modal */}
//       <Modal open={openConnectDbModal} onClose={handleCloseConnectDb}>
//         <ModalBox>
//           <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
//             Connect Database
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <TextField
//               label="Database Key"
//               name="key"
//               value={newDb.key}
//               onChange={handleDbInputChange}
//               fullWidth
//               required
//               variant="outlined"
//               sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//             />
//             <TextField
//               select
//               label="Access Level"
//               name="accessLevel"
//               value={newDb.accessLevel}
//               onChange={handleDbInputChange}
//               fullWidth
//               required
//               variant="outlined"
//               sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
//             >
//               <MenuItem value="Public">Public</MenuItem>
//               <MenuItem value="Private">Private</MenuItem>
//               <MenuItem value="Restricted">Restricted</MenuItem>
//             </TextField>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ alignSelf: 'flex-end', borderRadius: '8px', boxShadow: 3, px: 3 }}
//               onClick={handleConnectDb}
//             >
//               Submit
//             </Button>
//           </Box>
//         </ModalBox>
//       </Modal>
//     </Box>
//   );
// };

// export default SQLTab;





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
  Select, // Added for dropdown
  Snackbar, // Added for feedback
  Alert, // Added for feedback
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
import LockIcon from '@mui/icons-material/Lock'; // Kept for potential future use or default
import LockOpenIcon from '@mui/icons-material/LockOpen'; // Default icon
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // For Manager
import PersonIcon from '@mui/icons-material/Person'; // For Member
import EditIcon from '@mui/icons-material/Edit'; // Added for edit button
import SaveIcon from '@mui/icons-material/Save'; // Added for save button
import CancelIcon from '@mui/icons-material/Cancel'; // Added for cancel button
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

// --- Updated AccessChip Styling ---
const AccessChip = styled(Chip)(({ theme, access }) => {
  let paletteColorKey = 'grey'; // Default
  let specificColorMain = theme.palette.grey[700];
  let specificColorBg = theme.palette.grey[500];

  switch (access?.toLowerCase()) {
    case 'manager': // Changed from 'admin'
      paletteColorKey = 'error'; // Using error color for manager (high privilege)
      break;
    case 'member':
      paletteColorKey = 'success';
      break;
    // No 'restricted' case anymore
  }

  const colorConfig = theme.palette[paletteColorKey] || {};
  specificColorMain = colorConfig.main || specificColorMain;
  specificColorBg = colorConfig.main || specificColorBg;

  if (paletteColorKey === 'grey') {
      specificColorMain = theme.palette.text.secondary;
      specificColorBg = theme.palette.action.selected;
       return {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(specificColorBg, 0.15),
            color: specificColorMain,
            border: `1px solid ${alpha(specificColorMain, 0.2)}`,
            fontWeight: 400,
       };
  }

  // Styles for 'manager', 'member'
  return {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(specificColorBg, 0.1),
    color: specificColorMain,
    border: `1px solid ${alpha(specificColorMain, 0.3)}`,
    fontWeight: 500,
  };
});

// --- Updated AccessLevelIcon ---
const AccessLevelIcon = ({ access }) => {
  switch(access?.toLowerCase()) {
    case 'manager': // Changed from 'admin'
      return <AdminPanelSettingsIcon fontSize="small" color="error" />; // Using error color for manager
    case 'member':
      return <PersonIcon fontSize="small" color="success" />;
    // No 'restricted' case anymore
    default:
      return <LockOpenIcon fontSize="small" />; // Default icon for unknown/other levels
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
    dbName: '', // Used as connection identifier
    port: '',
    username: '',
    password: '',
    host: '',
    actualDbName: '', // Added for SQL DBs if connection name is different
  });

  // State for editing table access
  const [editingTable, setEditingTable] = useState(null); // { dbName: string, tableName: string }
  const [newAccessLevel, setNewAccessLevel] = useState('');
  const [updatingAccess, setUpdatingAccess] = useState(false);
  const [updateAccessError, setUpdateAccessError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success' | 'error' | 'warning' | 'info'

  // API URLs
  const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';
  const GET_DB_API_URL = `${API_BASE_URL}/get-sql-database`;
  const TABLE_ACCESS_API_URL = `${API_BASE_URL}/get-table-access-level`;
  const UPDATE_TABLE_ACCESS_API_URL = `${API_BASE_URL}/update-table-access-level`;

  // --- Updated Possible Access Levels ---
  const ACCESS_LEVELS = ['member', 'manager'];

  // Fetch databases from the API
  useEffect(() => {
    const fetchDatabases = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authentication token not found. Please log in again.');

        const response = await fetch(GET_DB_API_URL, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'X-API-Key': '123' // Replace with your actual API key if needed
          }
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Server responded with status ${response.status}: ${errorText}`);
        }

        const result = await response.json();
        if (result.status === 'success') {
          // Ensure config exists, provide default if not (robustness)
          const databasesWithConfig = result.data.map(db => ({
            ...db,
            config: db.config || {}
          }));
          setDatabases(databasesWithConfig);
        } else {
          throw new Error(result.message || 'Failed to fetch databases');
        }
      } catch (err) {
        console.error('Error fetching databases:', err);
        setError(err.message);
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
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Authentication token not found.');

      const response = await fetch(`${TABLE_ACCESS_API_URL}?db_name=${encodeURIComponent(dbName)}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-API-Key': '123' // Replace if needed
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server responded with status ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      if (result.status === 'success') {
        setTableAccessData(prev => ({ ...prev, [dbName]: result.data || [] })); // Ensure it's an array
      } else {
        throw new Error(result.message || 'Failed to fetch table access levels');
      }
    } catch (err) {
      console.error(`Error fetching table access levels for ${dbName}:`, err);
      setErrorTableAccess(prev => ({ ...prev, [dbName]: err.message }));
      setTableAccessData(prev => ({ ...prev, [dbName]: [] })); // Set empty array on error
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
      username: '', password: '', host: '', actualDbName: '',
    });
  };

  const handleDbTypeSelect = (type) => {
    setSelectedDbType(type);
    // Reset details specific to the type
    setDbDetails({
      supabaseKey: '', supabaseUrl: '', dbName: '', port: '',
      username: '', password: '', host: '', actualDbName: '',
    });
  };

  const handleDetailInputChange = (e) => {
    const { name, value } = e.target;
    setDbDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleConnectDb = async () => {
    let connectionData = { type: selectedDbType };
    let isValid = false;
    const connectionName = dbDetails.dbName.trim(); // Use dbName as the unique connection identifier

    if (!connectionName) {
        showSnackbar('Please provide a unique Connection Name.', 'warning');
        return;
    }

    if (selectedDbType === 'supabase') {
      if (dbDetails.supabaseUrl.trim() && dbDetails.supabaseKey.trim()) {
        connectionData = {
          type: selectedDbType,
          dbname: connectionName, // Connection identifier
          config: {
            supabase_url: dbDetails.supabaseUrl.trim(),
            supabase_key: dbDetails.supabaseKey.trim()
            // Supabase doesn't typically need a separate 'actualDbName'
          }
        };
        isValid = true;
      }
    } else if (['postgresql', 'mysql', 'sqlserver'].includes(selectedDbType)) {
      // Require actualDbName for these types
      if (dbDetails.actualDbName.trim() && dbDetails.port.trim() && dbDetails.username.trim() && dbDetails.password.trim() && dbDetails.host.trim()) {
        connectionData = {
          type: selectedDbType,
          dbname: connectionName, // Connection identifier
          config: {
            host: dbDetails.host.trim(),
            port: dbDetails.port.trim(),
            user: dbDetails.username.trim(),
            password: dbDetails.password.trim(),
            database: dbDetails.actualDbName.trim() // Add the actual database name to config
          }
        };
        isValid = true;
      } else {
          // Be more specific about missing fields
          const missing = [];
          if (!dbDetails.actualDbName.trim()) missing.push("Database Name");
          if (!dbDetails.port.trim()) missing.push("Port");
          if (!dbDetails.username.trim()) missing.push("Username");
          if (!dbDetails.password.trim()) missing.push("Password");
          if (!dbDetails.host.trim()) missing.push("Host Address");
          if (missing.length > 0) {
              showSnackbar(`Please fill in: ${missing.join(', ')}.`, 'warning');
              return; // Stop execution
          }
      }
    }

    if (isValid) {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authentication token not found.');

        // TODO: Replace with actual API call to save the database configuration
        console.log("Simulating connection:", connectionData);
        // const response = await fetch('YOUR_SAVE_DB_ENDPOINT', { ... });
        // if (!response.ok) throw new Error(...);
        // const result = await response.json();

        // Simulate success: Add to state and show message
        setDatabases(prev => [...prev, connectionData]);
        showSnackbar(`Database connection '${connectionName}' added successfully!`, 'success');
        handleCloseConnectDb();
      } catch (err) {
        console.error('Error connecting database:', err);
        showSnackbar(`Failed to connect database: ${err.message}`, 'error');
      }
    } else if (selectedDbType) { // Only show generic error if a type was selected but validation failed
        // Specific validation messages handled above, this is a fallback
        showSnackbar(`Please fill in all required fields for ${selectedDbType}.`, 'warning');
    }
  };

  const handleBackToDashboard = () => {
    navigate('/adminDashboard');
  };

  const handleViewTableAccess = (dbName) => {
    if (expandedDb === dbName) {
      setExpandedDb(null);
      setEditingTable(null); // Close editing when collapsing
    } else {
      setExpandedDb(dbName);
      // Fetch only if data isn't already loaded or currently loading
      if (!tableAccessData[dbName] && !loadingTableAccess[dbName]) {
        fetchTableAccessLevels(dbName);
      }
    }
  };

  // --- Table Access Update Handlers ---

  const handleEditTableAccess = (dbName, tableName, currentAccessLevel) => {
    setEditingTable({ dbName, tableName });
    // Ensure the current level is one of the allowed levels, otherwise default to 'member'
    setNewAccessLevel(ACCESS_LEVELS.includes(currentAccessLevel?.toLowerCase()) ? currentAccessLevel : 'member');
    setUpdateAccessError(null); // Clear previous errors
  };

  const handleCancelEdit = () => {
    setEditingTable(null);
    setNewAccessLevel('');
    setUpdateAccessError(null);
  };

  const handleAccessLevelChange = (event) => {
    setNewAccessLevel(event.target.value);
  };

  const handleUpdateTableAccess = async () => {
    if (!editingTable || !newAccessLevel) return;

    const { dbName, tableName } = editingTable;
    const originalAccessLevel = tableAccessData[dbName]?.find(t => t.table_name === tableName)?.access_level;

    // Prevent API call if the level hasn't changed
    if (newAccessLevel === originalAccessLevel) {
        handleCancelEdit(); // Just close the editor
        return;
    }

    setUpdatingAccess(true);
    setUpdateAccessError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Authentication token not found.');

      const response = await fetch(UPDATE_TABLE_ACCESS_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-API-Key': '123' // Replace if needed
        },
        body: JSON.stringify({
          db_name: dbName,
          table_name: tableName,
          access_level: newAccessLevel, // Send the selected level ('member' or 'manager')
        }),
      });

      const result = await response.json();

      if (!response.ok) {
          const errorDetail = result?.detail || `Update failed with status ${response.status}`;
          throw new Error(errorDetail);
      }

      if (result.status === 'success') {
        // Update local state
        setTableAccessData(prev => ({
          ...prev,
          [dbName]: (prev[dbName] || []).map(table =>
            table.table_name === tableName
              ? { ...table, access_level: newAccessLevel }
              : table
          ),
        }));
        showSnackbar(result.message || `Access level for ${tableName} updated to ${newAccessLevel}.`, 'success');
        handleCancelEdit(); // Exit editing mode
      } else {
        throw new Error(result.message || 'Failed to update table access level.');
      }
    } catch (err) {
      console.error('Error updating table access level:', err);
      setUpdateAccessError(err.message);
      showSnackbar(`Update failed: ${err.message}`, 'error');
    } finally {
      setUpdatingAccess(false);
    }
  };

  // --- Snackbar Handler ---
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const showSnackbar = (message, severity = 'info') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };


  // --- Helper Functions ---
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
    if (!selectedDbType || !dbDetails.dbName.trim()) return true; // Connection Name is always required
    if (selectedDbType === 'supabase') {
      return !dbDetails.supabaseKey.trim() || !dbDetails.supabaseUrl.trim();
    }
    if (['postgresql', 'mysql', 'sqlserver'].includes(selectedDbType)) {
      // Actual DB Name is also required for these
      return !dbDetails.actualDbName.trim() || !dbDetails.port.trim() || !dbDetails.username.trim() || !dbDetails.password.trim() || !dbDetails.host.trim();
    }
    return true; // Should not happen if selectedDbType is valid
  };

  const maskString = (str, showChars = 4) => {
    if (!str) return '';
    if (str.length <= showChars * 2) return '••••••';
    return str.substring(0, showChars) + '•'.repeat(Math.min(20, str.length - (showChars * 2))) + str.substring(str.length - showChars);
  };

  const copyToClipboard = (text) => {
    if (!text) return; // Don't try to copy empty strings
    navigator.clipboard.writeText(text)
      .then(() => showSnackbar('Copied to clipboard!', 'success'))
      .catch(err => {
          console.error('Failed to copy: ', err);
          showSnackbar('Failed to copy to clipboard.', 'error');
      });
  };

  // --- Render Functions ---
  const renderDbConfig = (db) => {
    // Use db.dbname as the connection identifier/name displayed
    const { type, dbname, config = {} } = db; // Default config to empty object

    switch (type?.toLowerCase()) {
      case 'supabase':
        return (
          <>
            {/* dbname here is the connection name */}
            {/* <KeyValue>
              <KeyLabel>Connection Name</KeyLabel>
              <ValueText>{dbname}</ValueText>
            </KeyValue> */}
            <KeyValue>
              <KeyLabel>Supabase Project URL</KeyLabel>
              <Tooltip title="Click to copy" placement="top">
                <ValueText onClick={() => copyToClipboard(config.supabase_url)}>
                  {config.supabase_url || 'N/A'}
                </ValueText>
              </Tooltip>
            </KeyValue>
            <KeyValue>
              <KeyLabel>Supabase Anon Key</KeyLabel>
               <Tooltip title="Click to copy" placement="top">
                <ValueText onClick={() => copyToClipboard(config.supabase_key)}>
                  {maskString(config.supabase_key, 6)}
                </ValueText>
              </Tooltip>
            </KeyValue>
          </>
        );
      case 'postgresql':
      case 'mysql':
      case 'sqlserver':
        return (
          <>
            {/* dbname here is the connection name */}
            {/* <KeyValue>
              <KeyLabel>Connection Name</KeyLabel>
              <ValueText>{dbname}</ValueText>
            </KeyValue> */}
             <KeyValue>
              <KeyLabel>Database Name</KeyLabel>
              <ValueText>{config.database || 'N/A'}</ValueText> {/* Display actual DB name */}
            </KeyValue>
            <KeyValue>
              <KeyLabel>Host</KeyLabel>
              <Tooltip title="Click to copy" placement="top">
                <ValueText onClick={() => copyToClipboard(config.host)}>
                  {config.host || 'N/A'}
                </ValueText>
              </Tooltip>
            </KeyValue>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <KeyValue>
                  <KeyLabel>Port</KeyLabel>
                  <ValueText>{config.port || 'N/A'}</ValueText>
                </KeyValue>
              </Grid>
              <Grid item xs={6}>
                <KeyValue>
                  <KeyLabel>User</KeyLabel>
                  <ValueText>{config.user || 'N/A'}</ValueText>
                </KeyValue>
              </Grid>
            </Grid>
            {/* Password is intentionally omitted */}
          </>
        );
      default:
        return <Typography>Configuration details not available for type: {type}</Typography>;
    }
  };

  const renderTableAccess = (dbName) => {
    const isExpanded = expandedDb === dbName;
    const isLoading = loadingTableAccess[dbName];
    const error = errorTableAccess[dbName];
    const tableData = tableAccessData[dbName] || []; // Ensure tableData is always an array

    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <ActionButton
            color="primary"
            variant={isExpanded ? "contained" : "outlined"}
            endIcon={isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            onClick={() => handleViewTableAccess(dbName)}
            startIcon={<VisibilityIcon />}
            // Disable button if the parent DB card is still loading basic info
            disabled={loading}
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

            {error && !isLoading && ( // Show error only if not loading
              <Box sx={{
                p: 2, borderRadius: 1, bgcolor: alpha('#f44336', 0.08),
                border: '1px solid', borderColor: 'error.light', color: 'error.main', my: 1
              }}>
                <Typography>Error loading tables: {error}</Typography>
              </Box>
            )}

            {!isLoading && !error && tableData.length > 0 && (
              <TableContainer component={Paper} elevation={0} variant="outlined">
                <Table size="small">
                  <TableHead sx={{ bgcolor: alpha('#f5f5f5', 0.6) }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Table Name</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 'bold' }}>Access Level</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((table) => {
                      const isEditing = editingTable?.dbName === dbName && editingTable?.tableName === table.table_name;
                      const isUpdatingThisRow = isEditing && updatingAccess;
                      const currentLevelInState = table.access_level; // Get current level from data

                      return (
                        <TableRow
                          key={table.table_name}
                          sx={{
                            '&:nth-of-type(odd)': { bgcolor: alpha('#f9f9f9', 0.4) },
                            opacity: isUpdatingThisRow ? 0.6 : 1,
                            position: 'relative',
                          }}
                        >
                          <TableCell component="th" scope="row" sx={{ fontFamily: 'monospace' }}>
                            {table.table_name}
                          </TableCell>
                          <TableCell align="center">
                            {isEditing ? (
                              <Select
                                value={newAccessLevel} // Bound to the editing state
                                onChange={handleAccessLevelChange}
                                size="small"
                                sx={{ minWidth: 130 }} // Adjusted width
                                disabled={isUpdatingThisRow}
                              >
                                {ACCESS_LEVELS.map(level => (
                                  <MenuItem key={level} value={level}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                      <AccessLevelIcon access={level} />
                                      <Typography sx={{ textTransform: 'capitalize' }}>{level}</Typography>
                                    </Box>
                                  </MenuItem>
                                ))}
                              </Select>
                            ) : (
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                <AccessLevelIcon access={currentLevelInState} />
                                <AccessChip
                                  access={currentLevelInState}
                                  label={currentLevelInState || 'N/A'} // Show N/A if level is missing
                                  size="small"
                                />
                              </Box>
                            )}
                          </TableCell>
                          <TableCell align="right">
                            {isEditing ? (
                              <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end' }}>
                                <Tooltip title="Save Changes">
                                  <span>
                                    <IconButton
                                      size="small"
                                      color="primary"
                                      onClick={handleUpdateTableAccess}
                                      disabled={isUpdatingThisRow || newAccessLevel === currentLevelInState} // Disable if no change or updating
                                    >
                                      {isUpdatingThisRow ? <CircularProgress size={20} /> : <SaveIcon />}
                                    </IconButton>
                                  </span>
                                </Tooltip>
                                <Tooltip title="Cancel Edit">
                                  <span>
                                    <IconButton
                                      size="small"
                                      onClick={handleCancelEdit}
                                      disabled={isUpdatingThisRow}
                                    >
                                      <CancelIcon />
                                    </IconButton>
                                  </span>
                                </Tooltip>
                              </Box>
                            ) : (
                              <Tooltip title="Edit Access Level">
                                <span> {/* Span needed for disabled button tooltip */}
                                  <IconButton
                                    size="small"
                                    onClick={() => handleEditTableAccess(dbName, table.table_name, currentLevelInState)}
                                    disabled={!!editingTable || isUpdatingThisRow} // Disable if any row is being edited or updated
                                  >
                                    <EditIcon fontSize="small" />
                                  </IconButton>
                                </span>
                              </Tooltip>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                {/* Display update error specific to this table if editing */}
                {updateAccessError && editingTable?.dbName === dbName && (
                    <Typography color="error" variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 1, px:1 }}>
                        Update Error: {updateAccessError}
                    </Typography>
                )}
              </TableContainer>
            )}

            {!isLoading && !error && tableData.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography color="text.secondary">No tables found or access data unavailable.</Typography>
              </Box>
            )}
          </TableAccessContainer>
        </Collapse>
      </>
    );
  };


  // --- Main Render ---
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

      {error && !loading && databases.length === 0 && ( // Show error only if not loading and no data
        <Box sx={{
          backgroundColor: alpha('#f44336', 0.1), color: 'error.main', p: 3, borderRadius: 2,
          width: '100%', maxWidth: '800px', mb: 3, border: '1px solid', borderColor: 'error.main',
        }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Error Loading Databases</Typography>
          <Typography>{error}</Typography>
        </Box>
      )}

      {/* Database List */}
      {!loading && databases.length === 0 && !error && ( // Show "No databases" only if not loading, no data, and no error
        <Box sx={{ textAlign: 'center', my: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, width: '100%', maxWidth: '800px', boxShadow: 1 }}>
          <Typography variant="h6" color="text.secondary">No databases connected yet</Typography>
          <Typography color="text.secondary">Connect your first database using the button above.</Typography>
        </Box>
      )}

      {/* Display Database Cards */}
      {!loading && databases.map((db, index) => (
        <DatabaseCard key={db.dbname || `db-${index}`}> {/* Use dbname (connection name) as key */}
          <CardHeader>
            {getDbIcon(db.type)}
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary', flexGrow: 1 }}>
              {db.dbname || 'Unnamed Connection'} {/* Display connection name */}
              <Chip
                label={db.type || 'Unknown'}
                size="small"
                color="primary"
                variant="outlined"
                sx={{ ml: 1.5, textTransform: 'capitalize' }}
              />
            </Typography>
            {/* Optional: Add a delete button for the database connection */}
            {/* <Tooltip title="Disconnect Database">
              <IconButton size="small" color="error" onClick={() => handleDeleteDatabase(db.dbname)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip> */}
          </CardHeader>
          <CardContent sx={{ pt: 2, pb: '16px !important' }}>
            {renderDbConfig(db)}
            {/* Table Access Section - Pass connection name (dbname) */}
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

            <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Common Field: Connection Name */}
              {selectedDbType && (
                 <TextField
                    label="Connection Name"
                    name="dbName" // This state field holds the connection identifier
                    value={dbDetails.dbName}
                    onChange={handleDetailInputChange}
                    fullWidth required
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '8px' } }}
                    helperText="Unique name to identify this connection (e.g., 'production-pg', 'staging-supabase')"
                    autoFocus={!['supabase'].includes(selectedDbType)} // Autofocus here unless it's Supabase
                  />
              )}

              {/* Supabase Fields */}
              {selectedDbType === 'supabase' && (
                <Fade in={selectedDbType === 'supabase'} timeout={300}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      label="Supabase Project URL"
                      name="supabaseUrl"
                      value={dbDetails.supabaseUrl}
                      onChange={handleDetailInputChange}
                      fullWidth required variant="outlined"
                      InputProps={{ sx: { borderRadius: '8px' } }}
                      autoFocus // Autofocus here for Supabase
                      placeholder="https://<your-project-ref>.supabase.co"
                    />
                    <TextField
                      label="Supabase Anon Key (Public)"
                      name="supabaseKey"
                      value={dbDetails.supabaseKey}
                      onChange={handleDetailInputChange}
                      fullWidth required variant="outlined"
                      InputProps={{ sx: { borderRadius: '8px' } }}
                      helperText="Use the public anon key, not the service role key"
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
                          name="actualDbName" // Separate state for the actual DB name
                          value={dbDetails.actualDbName}
                          onChange={handleDetailInputChange}
                          fullWidth required variant="outlined"
                          InputProps={{ sx: { borderRadius: '8px' } }}
                          helperText="The actual database name on the server"
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

              {/* Connect/Cancel Buttons */}
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

      {/* Snackbar for Feedback */}
      <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }} variant="filled">
              {snackbarMessage}
          </Alert>
      </Snackbar>

    </Container>
  );
};

export default SQLTab;