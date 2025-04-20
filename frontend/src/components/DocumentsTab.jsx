// // src/Components/DocumentsTab.jsx
// import React, { useState } from 'react';
// import { Box, Button, Modal, TextField, Card, CardContent, Typography, Chip, Grid, MenuItem } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import AddIcon from '@mui/icons-material/Add';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import { useDropzone } from 'react-dropzone';

// // Styled Components
// const ModalBox = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90%',
//   maxWidth: { xs: 300, sm: 600 },
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
//   minHeight: 100,
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

// const DocumentsTab = () => {
//   const [openCreatePdfModal, setOpenCreatePdfModal] = useState(false);
//   const [pdfs, setPdfs] = useState([
//     { title: 'Report Q1', summary: 'Quarterly performance report', accessLevel: 'Public' },
//     { title: 'User Manual', summary: 'System usage guide', accessLevel: 'Private' },
//     { title: 'Policy Doc', summary: 'Company policies', accessLevel: 'Restricted' },
//   ]);
//   const [newPdf, setNewPdf] = useState({ file: null, accessLevel: '' });

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: { 'application/pdf': [] },
//     onDrop: (acceptedFiles) => {
//       setNewPdf((prev) => ({ ...prev, file: acceptedFiles[0] }));
//     },
//   });

//   const handleOpenCreatePdf = () => setOpenCreatePdfModal(true);
//   const handleCloseCreatePdf = () => setOpenCreatePdfModal(false);

//   const handlePdfInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPdf((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddPdf = () => {
//     if (newPdf.file && newPdf.accessLevel) {
//       setPdfs([...pdfs, { title: newPdf.file.name, summary: 'Newly uploaded PDF', accessLevel: newPdf.accessLevel }]);
//       setNewPdf({ file: null, accessLevel: '' });
//       handleCloseCreatePdf();
//     }
//   };

//   return (
//     <Box>
//       <Button
//         variant="contained"
//         color="secondary"
//         startIcon={<AddIcon />}
//         sx={{ borderRadius: '8px', textTransform: 'none', boxShadow: 4, mb: 4 }}
//         onClick={handleOpenCreatePdf}
//       >
//         Create PDF
//       </Button>

//       <Grid container spacing={3}>
//         {pdfs.map((pdf, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <PdfCard>
//               <PictureAsPdfIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h6">{pdf.title}</Typography>
//                 <Typography variant="body2" color="text.secondary">{pdf.summary}</Typography>
//                 <Chip label={pdf.accessLevel} color="primary" size="small" sx={{ mt: 1 }} />
//               </CardContent>
//             </PdfCard>
//           </Grid>
//         ))}
//       </Grid>

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
//     </Box>
//   );
// };

// export default DocumentsTab;





import React, { useState, useEffect } from 'react';
import {
    Box, Button, Modal, TextField, Card, CardContent, Typography, Chip, Grid, MenuItem, IconButton,
    Container,
    Divider,
    Fade,
    Grow,
    Tooltip,
    CircularProgress,
    Alert,
    Menu,
    Snackbar,
    Dialog, // Using Dialog for confirmation is often semantically better than Modal
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/DeleteOutline'; // Delete Icon
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

// --- Styled Components ---

const ModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 550,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.shadows[12],
    padding: theme.spacing(4),
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
}));

const DropzoneBox = styled(Box)(({ theme }) => ({
    border: `2px dashed ${alpha(theme.palette.primary.main, 0.5)}`,
    borderRadius: theme.shape.borderRadius * 1.5,
    padding: theme.spacing(3, 2),
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: theme.palette.action.hover,
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    color: theme.palette.text.secondary,
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.light, 0.1),
        borderColor: theme.palette.primary.main,
    },
}));

const PdfCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2.5, 3),
    borderRadius: theme.shape.borderRadius * 2,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.07)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.2s ease',
    background: '#fff',
    width: '100%',
    position: 'relative',
    '&:hover': {
        transform: 'translateY(-5px) scale(1.01)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        borderColor: theme.palette.primary.light,
    },
    // Style when deleting
    '&.deleting': {
        opacity: 0.6,
        pointerEvents: 'none', // Disable interactions while deleting
        borderColor: theme.palette.error.light,
    }
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

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(5),
    width: '100%',
}));

// --- Component ---

const DocumentsTab = () => {
    const [openCreatePdfModal, setOpenCreatePdfModal] = useState(false);
    const [pdfs, setPdfs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPdf, setNewPdf] = useState({ file: null, accessLevel: '' });
    const navigate = useNavigate();

    // Update Menu State
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentDocIdForMenu, setCurrentDocIdForMenu] = useState(null);
    const [updatingDocId, setUpdatingDocId] = useState(null);

    // --- NEW: Delete Confirmation State ---
    const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
    const [docToDelete, setDocToDelete] = useState(null); // Stores { document_id, title }
    const [deletingDocId, setDeletingDocId] = useState(null); // Tracks API call for delete

    // Snackbar State
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    // --- Fetch Documents Function (Unchanged from previous version) ---
    const fetchDocuments = async () => {
        // Keep isLoading true only for initial load
        // setIsLoading(true); // Commented out: only set true initially
        setError(null);
        const token = localStorage.getItem('token');
        const apiKey = '123';
        const apiUrl = 'http://127.0.0.1:8000/api/v1/get-document-access-level';

        if (!token) {
            setError('Authentication token not found. Please log in.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            const contentType = response.headers.get("content-type");

            if (!response.ok) {
                let errorDetail = `HTTP error! Status: ${response.status} ${response.statusText}`;
                 try {
                    if (contentType && contentType.includes("application/json")) {
                        const errorData = await response.json();
                        errorDetail = errorData.detail || JSON.stringify(errorData) || errorDetail;
                    } else {
                        const errorText = await response.text();
                        console.error("API Error Response (Not JSON):", errorText);
                        errorDetail = `${errorDetail} - Server sent non-JSON response.`;
                    }
                } catch (parseError) {
                     console.error("Error parsing error response:", parseError);
                     errorDetail = `${errorDetail} - Could not parse error response.`;
                }
                throw new Error(errorDetail);
            }

             if (!contentType || !contentType.includes("application/json")) {
                 const responseText = await response.text();
                 console.error("API Success Response (Not JSON):", responseText);
                 throw new Error(`Server responded OK but content type was ${contentType || 'missing'}, not JSON.`);
            }

            const result = await response.json();

            if (result.status === 'success' && Array.isArray(result.data)) {
                const formattedPdfs = result.data.map(doc => ({
                    ...doc,
                    accessLevel: doc.access_level
                }));
                setPdfs(formattedPdfs);
            } else {
                throw new Error(result.message || 'API response format was incorrect.');
            }

        } catch (err) {
            console.error("API Fetch Error:", err);
            setError(err.message || 'An unexpected error occurred while fetching documents.');
        } finally {
            // Only set loading to false on the initial fetch
            if (isLoading) setIsLoading(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        fetchDocuments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // --- Dropzone Hook (Unchanged) ---
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'application/pdf': ['.pdf'] },
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                setNewPdf((prev) => ({ ...prev, file: acceptedFiles[0] }));
            }
        },
        multiple: false,
    });

    // --- Modal/Navigation Handlers (Unchanged) ---
    const handleOpenCreatePdf = () => setOpenCreatePdfModal(true);
    const handleCloseCreatePdf = () => {
        setOpenCreatePdfModal(false);
        setNewPdf({ file: null, accessLevel: '' });
    };
    const handlePdfInputChange = (e) => {
        const { name, value } = e.target;
        setNewPdf((prev) => ({ ...prev, [name]: value }));
    };
    const handleAddPdf = () => {
        if (newPdf.file && newPdf.accessLevel) {
            const newlyAddedPdf = {
                title: newPdf.file.name,
                summary: `Uploaded locally: ${new Date().toLocaleDateString()}`,
                accessLevel: newPdf.accessLevel,
                isLocal: true
            };
            setPdfs(prevPdfs => [...prevPdfs, newlyAddedPdf]);
            handleCloseCreatePdf();
            console.warn("PDF added to local state only. Implement backend upload.");
            // TODO: Implement upload API call and then fetchDocuments()
        } else {
            alert("Please select a PDF file and an access level.");
        }
    };
    const handleBackToDashboard = () => navigate('/adminDashboard');
    const getChipColor = (access) => {
        switch (access?.toLowerCase()) {
            case 'manager': return 'primary';
            case 'member': return 'secondary';
            default: return 'default';
        }
    };

    // --- Update Menu Handlers (Unchanged) ---
    const handleMenuOpen = (event, docId) => {
        setAnchorEl(event.currentTarget);
        setCurrentDocIdForMenu(docId);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentDocIdForMenu(null);
    };

    // --- Snackbar Handler (Unchanged) ---
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbarOpen(false);
    };

    // --- Update API Call (Unchanged) ---
    const handleUpdateAccessLevel = async (documentId, newAccessLevel) => {
        handleMenuClose();
        setUpdatingDocId(documentId);
        setSnackbarOpen(false);

        const token = localStorage.getItem('token');
        const apiKey = '123';
        const apiUrl = 'http://127.0.0.1:8000/api/v1/update-document-access-level';

        if (!token) {
            setSnackbarMessage('Authentication token not found.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            setUpdatingDocId(null);
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ doc_id: documentId, access_level: newAccessLevel }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.detail || `HTTP error! Status: ${response.status}`);
            if (result.status === 'success') {
                setPdfs(prevPdfs => prevPdfs.map(pdf => pdf.document_id === documentId ? { ...pdf, accessLevel: newAccessLevel } : pdf));
                setSnackbarMessage(result.message || 'Access level updated successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            } else {
                throw new Error(result.message || 'Failed to update access level.');
            }
        } catch (err) {
            console.error("API Update Error:", err);
            setSnackbarMessage(err.message || 'An error occurred while updating.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        } finally {
            setUpdatingDocId(null);
        }
    };

    // --- NEW: Delete Confirmation Dialog Handlers ---
    const handleOpenDeleteDialog = (doc) => {
        setDocToDelete(doc); // Store the doc info
        setConfirmDeleteDialogOpen(true);
    };

    const handleCloseDeleteDialog = () => {
        setConfirmDeleteDialogOpen(false);
        // Don't reset docToDelete immediately, might be needed if delete fails
        // setDocToDelete(null);
    };

    // --- NEW: Delete API Call ---
    const handleConfirmDelete = async () => {
        if (!docToDelete) return;

        const documentIdToDelete = docToDelete.document_id;
        setDeletingDocId(documentIdToDelete); // Set loading state for this card
        setConfirmDeleteDialogOpen(false); // Close dialog
        setSnackbarOpen(false); // Hide previous snackbar

        const token = localStorage.getItem('token');
        const apiKey = '123';
        // Construct URL with doc_id in the path
        const apiUrl = `http://127.0.0.1:8000/api/v1/delete-processed-document/${documentIdToDelete}`;

        if (!token) {
            setSnackbarMessage('Authentication token not found.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            setDeletingDocId(null);
            setDocToDelete(null); // Clear the target doc
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'DELETE', // Use DELETE method
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'x-api-key': apiKey,
                    'Accept': 'application/json', // Expect JSON response
                },
                // No body needed for DELETE usually, ID is in URL
            });

            const result = await response.json(); // Assume API returns JSON

            if (!response.ok) {
                 throw new Error(result.detail || `HTTP error! Status: ${response.status}`);
            }

            if (result.status === 'success') {
                // --- Remove document from local state ---
                setPdfs(prevPdfs => prevPdfs.filter(pdf => pdf.document_id !== documentIdToDelete));
                setSnackbarMessage(result.message || 'Document deleted successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            } else {
                 throw new Error(result.message || 'Failed to delete document.');
            }

        } catch (err) {
            console.error("API Delete Error:", err);
            setSnackbarMessage(err.message || 'An error occurred while deleting.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        } finally {
            setDeletingDocId(null); // Remove loading state
            setDocToDelete(null); // Clear the target doc
        }
    };


    return (
        <Container maxWidth="md" sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: 'text.primary', textAlign: 'center' }}>
                Manage Documents
            </Typography>

            <ButtonContainer>
                <StyledButton variant="contained" color="secondary" startIcon={<AddIcon />} onClick={handleOpenCreatePdf}>
                    Upload New PDF
                </StyledButton>
                <StyledButton variant="outlined" color="primary" startIcon={<ArrowBackIcon />} onClick={handleBackToDashboard}>
                    Back to Dashboard
                </StyledButton>
            </ButtonContainer>

            {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <CircularProgress />
                    <Typography sx={{ ml: 2 }}>Loading documents...</Typography>
                </Box>
            ) : error ? (
                <Alert severity="error" sx={{ width: '100%', mb: 3 }}>{error}</Alert>
            ) : pdfs.length === 0 ? (
                 <Typography sx={{ mt: 4, color: 'text.secondary' }}>
                    No documents found. Upload a new PDF to get started.
                 </Typography>
            ) : (
                <Grid container spacing={3} sx={{ width: '100%' }}>
                    {pdfs.map((pdf) => (
                        <Grow in={true} key={pdf.document_id} timeout={500}>
                            <Grid item xs={12}>
                                {/* Add 'deleting' class when this doc is being deleted */}
                                <PdfCard className={deletingDocId === pdf.document_id ? 'deleting' : ''}>
                                    {/* Optional: Show overlay spinner during delete */}
                                    {deletingDocId === pdf.document_id && (
                                        <Box sx={{
                                            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            backgroundColor: 'rgba(255, 255, 255, 0.7)', zIndex: 1, borderRadius: 'inherit'
                                        }}>
                                            <CircularProgress size={30} color="error"/>
                                        </Box>
                                    )}
                                    <PictureAsPdfIcon color="error" sx={{ fontSize: 56, mr: 3, flexShrink: 0 }} />
                                    <CardContent sx={{ flexGrow: 1, p: '8px !important', pr: { xs: 8, sm: 10 } /* Adjust padding for icons */ }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'medium', mb: 0.5 }}>{pdf.title}</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>{pdf.summary}</Typography>
                                        <Chip
                                            label={pdf.accessLevel}
                                            color={getChipColor(pdf.accessLevel)}
                                            size="small"
                                            sx={{ fontWeight: 'medium', textTransform: 'capitalize' }}
                                        />
                                    </CardContent>

                                    {/* --- Action Icons Container --- */}
                                    <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 0.5 }}>
                                        {/* Update Button/Spinner */}
                                        {updatingDocId === pdf.document_id ? (
                                            <CircularProgress size={24} sx={{ mr: 1 }}/>
                                        ) : (
                                            <Tooltip title="Change Access Level">
                                                {/* Disable if any update or delete is in progress */}
                                                <IconButton
                                                    aria-label="change access level"
                                                    aria-controls={`access-menu-${pdf.document_id}`}
                                                    aria-haspopup="true"
                                                    onClick={(e) => handleMenuOpen(e, pdf.document_id)}
                                                    size="small"
                                                    disabled={updatingDocId !== null || deletingDocId !== null}
                                                >
                                                    <MoreVertIcon fontSize="small"/>
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                        {/* --- NEW: Delete Button --- */}
                                        <Tooltip title="Delete Document">
                                             {/* Disable if any update or delete is in progress */}
                                            <IconButton
                                                aria-label="delete document"
                                                onClick={() => handleOpenDeleteDialog(pdf)} // Pass the whole pdf object
                                                size="small"
                                                color="error" // Use error color for delete
                                                disabled={updatingDocId !== null || deletingDocId !== null}
                                            >
                                                <DeleteIcon fontSize="small"/>
                                            </IconButton>
                                        </Tooltip>
                                        {/* --- END Delete Button --- */}
                                    </Box>
                                    {/* --- END Action Icons Container --- */}

                                    {/* Update Menu (Unchanged) */}
                                    <Menu
                                        id={`access-menu-${pdf.document_id}`}
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl) && currentDocIdForMenu === pdf.document_id}
                                        onClose={handleMenuClose}
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    >
                                        {pdf.accessLevel !== 'manager' && (
                                            <MenuItem onClick={() => handleUpdateAccessLevel(pdf.document_id, 'manager')}>Set as Manager</MenuItem>
                                        )}
                                         {pdf.accessLevel !== 'member' && (
                                            <MenuItem onClick={() => handleUpdateAccessLevel(pdf.document_id, 'member')}>Set as Member</MenuItem>
                                         )}
                                    </Menu>
                                </PdfCard>
                            </Grid>
                        </Grow>
                    ))}
                </Grid>
            )}

            {/* Create PDF Modal (Unchanged) */}
            <Modal open={openCreatePdfModal} onClose={handleCloseCreatePdf} closeAfterTransition aria-labelledby="create-pdf-modal-title">
                <Fade in={openCreatePdfModal}>
                    <ModalBox>
                        <Typography id="create-pdf-modal-title" variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center', mb: 3 }}>
                            Upload New Document
                        </Typography>
                        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <DropzoneBox {...getRootProps()}>
                                <input {...getInputProps()} />
                                <UploadFileIcon sx={{ fontSize: 48, mb: 1, color: isDragActive ? 'primary.main' : 'action.active' }} />
                                <Typography variant="body1" sx={{ color: newPdf.file ? 'text.primary' : 'text.secondary' }}>
                                    {newPdf.file ? newPdf.file.name : isDragActive ? "Drop the PDF file here..." : "Drag & drop PDF here, or click"}
                                </Typography>
                                <Typography variant="caption">(Max size: 10MB)</Typography>
                            </DropzoneBox>
                            <TextField select label="Access Level" name="accessLevel" value={newPdf.accessLevel} onChange={handlePdfInputChange} fullWidth required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}>
                                <MenuItem value="manager">Manager</MenuItem>
                                <MenuItem value="member">Member</MenuItem>
                            </TextField>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 1 }}>
                                <StyledButton variant="text" color="inherit" onClick={handleCloseCreatePdf}>Cancel</StyledButton>
                                <StyledButton variant="contained" color="primary" onClick={handleAddPdf} disabled={!newPdf.file || !newPdf.accessLevel}>Add Document</StyledButton>
                            </Box>
                        </Box>
                    </ModalBox>
                </Fade>
            </Modal>

            {/* --- NEW: Delete Confirmation Dialog --- */}
            <Dialog
                open={confirmDeleteDialogOpen}
                onClose={handleCloseDeleteDialog} // Close if clicking outside
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Confirm Deletion
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to permanently delete the document:
                        <Typography component="span" sx={{ fontWeight: 'bold', display: 'block', mt: 1 }}>
                            {docToDelete?.title}?
                        </Typography>
                        This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={handleCloseDeleteDialog} color="inherit">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="error" variant="contained" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            {/* --- END Delete Confirmation Dialog --- */}


            {/* Snackbar for Feedback (Unchanged) */}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

        </Container>
    );
};

export default DocumentsTab;