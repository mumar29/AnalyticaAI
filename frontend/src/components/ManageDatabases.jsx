// // src/Components/ManageDatabases.jsx
// import React, { useState } from 'react';
// import {
//   Container, Typography, Button, Box, Drawer, List, ListItem, ListItemText, Modal, TextField,
//   Chip, Card, CardContent, Grid, MenuItem // Added MenuItem here
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import { useDropzone } from 'react-dropzone';

// // Styled Components
// const Sidebar = styled(Drawer)(({ theme }) => ({
//   width: { xs: 180, sm: 240 }, // Responsive width
//   flexShrink: 0,
//   '& .MuiDrawer-paper': {
//     width: { xs: 180, sm: 240 },
//     boxSizing: 'border-box',
//     backgroundColor: theme.palette.grey[100],
//     borderRight: `2px solid ${theme.palette.primary.main}`,
//   },
// }));

// const ContentBox = styled(Box)(({ theme }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   width: { xs: '100%', sm: 'auto' }, // Full width on mobile
// }));

// const ModalBox = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90%',
//   maxWidth: { xs: 300, sm: 600 }, // Responsive modal width
//   backgroundColor: '#fff',
//   borderRadius: '12px',
//   boxShadow: theme.shadows[10],
//   padding: theme.spacing(4),
//   outline: 'none',
// }));

// const DropzoneBox = styled(Box)(({ theme }) => ({
//   border: `2px dashed ${theme.palette.primary.main}`,
//   borderRadius: '8px',
//   padding: theme.spacing(4),
//   textAlign: 'center',
//   cursor: 'pointer',
//   backgroundColor: theme.palette.grey[50],
//   '&:hover': {
//     backgroundColor: theme.palette.grey[100],
//   },
//   minHeight: 100, // Ensure visibility
// }));

// const PdfCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(2),
//   transition: 'transform 0.3s ease',
//   '&:hover': {
//     transform: 'scale(1.02)',
//     boxShadow: theme.shadows[6],
//   },
// }));

// const ManageDatabases = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('SQL');
//   const [openCreatePdfModal, setOpenCreatePdfModal] = useState(false);
//   const [openConnectDbModal, setOpenConnectDbModal] = useState(false);
//   const [pdfs, setPdfs] = useState([
//     { title: 'Report Q1', summary: 'Quarterly performance report', accessLevel: 'Public' },
//     { title: 'User Manual', summary: 'System usage guide', accessLevel: 'Private' },
//     { title: 'Policy Doc', summary: 'Company policies', accessLevel: 'Restricted' },
//   ]);
//   const [databases, setDatabases] = useState([
//     { name: 'SalesDB', tables: ['Orders', 'Customers'], accessLevel: 'Private' },
//     { name: 'InventoryDB', tables: ['Products', 'Stock'], accessLevel: 'Restricted' },
//   ]);
//   const [newPdf, setNewPdf] = useState({ file: null, accessLevel: '' });
//   const [newDb, setNewDb] = useState({ key: '', accessLevel: '' });

//   const tabs = ['SQL', 'Documents'];

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: { 'application/pdf': [] }, // Updated syntax for v14+
//     onDrop: (acceptedFiles) => {
//       setNewPdf((prev) => ({ ...prev, file: acceptedFiles[0] }));
//     },
//   });

//   const handleTabChange = (tab) => setActiveTab(tab);
//   const handleOpenCreatePdf = () => setOpenCreatePdfModal(true);
//   const handleCloseCreatePdf = () => setOpenCreatePdfModal(false);
//   const handleOpenConnectDb = () => setOpenConnectDbModal(true);
//   const handleCloseConnectDb = () => setOpenConnectDbModal(false);

//   const handlePdfInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPdf((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDbInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewDb((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddPdf = () => {
//     if (newPdf.file && newPdf.accessLevel) {
//       setPdfs([...pdfs, { title: newPdf.file.name, summary: 'Newly uploaded PDF', accessLevel: newPdf.accessLevel }]);
//       setNewPdf({ file: null, accessLevel: '' });
//       handleCloseCreatePdf();
//     }
//   };

//   const handleConnectDb = () => {
//     if (newDb.key && newDb.accessLevel) {
//       setDatabases([...databases, { name: newDb.key, tables: ['Table1', 'Table2'], accessLevel: newDb.accessLevel }]);
//       setNewDb({ key: '', accessLevel: '' });
//       handleCloseConnectDb();
//     }
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 6, display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
//       {/* Sidebar */}
//       <Sidebar variant="permanent" sx={{ display: { xs: 'none', sm: 'block' } }}>
//         <List>
//           {tabs.map((tab) => (
//             <ListItem
//               button
//               key={tab}
//               onClick={() => handleTabChange(tab)}
//               sx={{
//                 backgroundColor: activeTab === tab ? 'primary.light' : 'inherit',
//                 color: activeTab === tab ? 'white' : 'text.primary',
//                 '&:hover': { backgroundColor: 'primary.main', color: 'white' },
//               }}
//             >
//               <ListItemText primary={tab} />
//             </ListItem>
//           ))}
//         </List>
//       </Sidebar>

//       {/* Mobile Tab Buttons */}
//       <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 2, mb: 2, justifyContent: 'center' }}>
//         {tabs.map((tab) => (
//           <Button
//             key={tab}
//             variant={activeTab === tab ? 'contained' : 'outlined'}
//             onClick={() => handleTabChange(tab)}
//             sx={{ borderRadius: '8px' }}
//           >
//             {tab}
//           </Button>
//         ))}
//       </Box>

//       {/* Main Content */}
//       <ContentBox>
//         <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: { xs: 'center', sm: 'left' } }}>
//           Manage Databases
//         </Typography>
//         <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//           {activeTab === 'Documents' && (
//             <Button
//               variant="contained"
//               color="secondary"
//               startIcon={<AddIcon />}
//               sx={{ borderRadius: '8px', textTransform: 'none', boxShadow: 4 }}
//               onClick={handleOpenCreatePdf}
//             >
//               Create PDF
//             </Button>
//           )}
//           {activeTab === 'SQL' && (
//             <Button
//               variant="contained"
//               color="secondary"
//               startIcon={<AddIcon />}
//               sx={{ borderRadius: '8px', textTransform: 'none', boxShadow: 4 }}
//               onClick={handleOpenConnectDb}
//             >
//               Connect Database
//             </Button>
//           )}
//           <Button
//             variant="outlined"
//             color="primary"
//             sx={{ borderRadius: '8px', textTransform: 'none' }}
//             onClick={() => navigate('/')}
//           >
//             Back to Dashboard
//           </Button>
//         </Box>

//         {/* Documents Tab Content */}
//         {activeTab === 'Documents' && (
//           <Box>
//             <Grid container spacing={3}>
//               {pdfs.map((pdf, index) => (
//                 <Grid item xs={12} sm={6} key={index}>
//                   <PdfCard>
//                     <PictureAsPdfIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
//                     <CardContent sx={{ flexGrow: 1 }}>
//                       <Typography variant="h6">{pdf.title}</Typography>
//                       <Typography variant="body2" color="text.secondary">{pdf.summary}</Typography>
//                       <Chip label={pdf.accessLevel} color="primary" size="small" sx={{ mt: 1 }} />
//                     </CardContent>
//                   </PdfCard>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         )}

//         {/* SQL Tab Content */}
//         {activeTab === 'SQL' && (
//           <Box>
//             {databases.map((db, index) => (
//               <Card key={index} sx={{ mb: 2, p: 2, display: 'flex', alignItems: 'center', '&:hover': { boxShadow: 6 }, flexDirection: { xs: 'column', sm: 'row' } }}>
//                 <Box sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
//                   <Typography variant="h6">{db.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Tables: {db.tables.join(', ')}
//                   </Typography>
//                 </Box>
//                 <Chip label={db.accessLevel} color="primary" size="small" sx={{ mt: { xs: 1, sm: 0 } }} />
//               </Card>
//             ))}
//           </Box>
//         )}
//       </ContentBox>

//       {/* Create PDF Modal */}
//       <Modal open={openCreatePdfModal} onClose={handleCloseCreatePdf}>
//         <ModalBox>
//           <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
//             Upload PDF
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//             <DropzoneBox {...getRootProps()}>
//               <input {...getInputProps()} />
//               <Typography>
//                 {newPdf.file ? newPdf.file.name : 'Drag & drop a PDF here, or click to select'}
//               </Typography>
//             </DropzoneBox>
//             <TextField
//               select
//               label="Access Level"
//               name="accessLevel"
//               value={newPdf.accessLevel}
//               onChange={handlePdfInputChange}
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
//               sx={{ alignSelf: 'flex-end', borderRadius: '8px', boxShadow: 3 }}
//               onClick={handleAddPdf}
//             >
//               Add PDF
//             </Button>
//           </Box>
//         </ModalBox>
//       </Modal>

//       {/* Connect Database Modal */}
//       <Modal open={openConnectDbModal} onClose={handleCloseConnectDb}>
//         <ModalBox>
//           <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
//             Connect Database
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
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
//               sx={{ alignSelf: 'flex-end', borderRadius: '8px', boxShadow: 3 }}
//               onClick={handleConnectDb}
//             >
//               Submit
//             </Button>
//           </Box>
//         </ModalBox>
//       </Modal>
//     </Container>
//   );
// };

// export default ManageDatabases;



// src/Components/ManageDatabases.jsx
// import React from 'react';
// import { Container, Typography, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { useNavigate, Outlet, useLocation } from 'react-router-dom';

// // Styled Components
// const Sidebar = styled(Drawer)(({ theme }) => ({
//   width: { xs: 180, sm: 240 },
//   flexShrink: 0,
//   '& .MuiDrawer-paper': {
//     width: { xs: 180, sm: 240 },
//     boxSizing: 'border-box',
//     backgroundColor: theme.palette.grey[100],
//     borderRight: `2px solid ${theme.palette.primary.main}`,
//   },
// }));

// const ContentBox = styled(Box)(({ theme }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   width: { xs: '100%', sm: 'auto' },
  
// }));

// const ManageDatabases = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const activeTab = location.pathname.includes('documents') ? 'Documents' : 'SQL';
//   const tabs = ['SQL', 'Documents'];

//   return (
//     <Container maxWidth="lg" sx={{ py: 6, display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
//       {/* Sidebar */}
//       <Sidebar variant="permanent" sx={{ display: { xs: 'none', sm: 'block' } }}>
//         <List>
//           {tabs.map((tab) => (
//             <ListItem
//               button // Changed from button={true}
//               key={tab}
//               onClick={() => navigate(tab.toLowerCase())}
//               sx={{
//                 backgroundColor: activeTab === tab ? 'primary.light' : 'inherit',
//                 color: activeTab === tab ? 'white' : 'text.primary',
//                 '&:hover': { backgroundColor: 'primary.main', color: 'white' },
//               }}
//             >
//               <ListItemText primary={tab} />
//             </ListItem>
//           ))}
//         </List>
//       </Sidebar>

//       {/* Mobile Tab Buttons */}
//       <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 2, mb: 2, justifyContent: 'center' }}>
//         {tabs.map((tab) => (
//           <Button
//             key={tab}
//             variant={activeTab === tab ? 'contained' : 'outlined'}
//             onClick={() => navigate(tab.toLowerCase())}
//             sx={{ borderRadius: '8px' }}
//           >
//             {tab}
//           </Button>
//         ))}
//       </Box>

//       {/* Main Content */}
//       <ContentBox>
//         <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: { xs: 'center', sm: 'left' } }}>
//           Manage Databases
//         </Typography>
//         <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: { xs: 'center', sm: 'flex-start' }}}>
//           <Button
//             variant="outlined"
//             color="primary"
//             sx={{ borderRadius: '8px', textTransform: 'none' }}
//             onClick={() => navigate('/')}
//           >
//             Back to Dashboard
//           </Button>
//         </Box>
//         <Outlet /> {/* Render tab content here */}
//       </ContentBox>
//     </Container>
//   );
// };

// export default ManageDatabases;






import React from 'react';
import { Container, Typography, Box, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

// Styled Components
const Sidebar = styled(Drawer)(({ theme }) => ({
  width: { xs: 180, sm: 240 },
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: { xs: 180, sm: 240 },
    boxSizing: 'border-box',
    backgroundColor: theme.palette.grey[100],
    borderRight: `2px solid ${theme.palette.primary.main}`,
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  width: { xs: '100%', sm: 'auto' },
}));

const ManageDatabases = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.includes('documents') ? 'Documents' : 'SQL';
  const tabs = ['SQL', 'Documents'];

  return (
    <Container maxWidth="lg" sx={{ py: 6, display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
      {/* Sidebar */}
      <Sidebar variant="permanent" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <List>
          {tabs.map((tab) => (
            <ListItem
              button
              key={tab}
              onClick={() => navigate(tab.toLowerCase())}
              sx={{
                backgroundColor: activeTab === tab ? 'primary.light' : 'inherit',
                color: activeTab === tab ? 'white' : 'text.primary',
                '&:hover': { backgroundColor: 'primary.main', color: 'white' },
              }}
            >
              <ListItemText primary={tab} />
            </ListItem>
          ))}
        </List>
      </Sidebar>

      {/* Mobile Tab Buttons */}
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 2, mb: 2, justifyContent: 'center' }}>
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'contained' : 'outlined'}
            onClick={() => navigate(tab.toLowerCase())}
            sx={{ borderRadius: '8px' }}
          >
            {tab}
          </Button>
        ))}
      </Box>

      {/* Main Content */}
      <ContentBox>
        {/* <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: { xs: 'center', sm: 'left' } }}>
          Manage Databases
        </Typography> */}
        {/* Removed the Back to Dashboard button from here */}
        <Outlet /> {/* Render tab content here */}
      </ContentBox>
    </Container>
  );
};

export default ManageDatabases;