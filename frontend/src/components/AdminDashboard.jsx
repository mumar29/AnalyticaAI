import React from 'react';
import { Container, Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import KeyIcon from '@mui/icons-material/Key';

// Pulse animation
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// Styled Feature Card with larger size
const FeatureCard = styled(Card)(({ theme }) => ({
  minHeight: 350,
  height: 350,
  width: '100%',
  maxWidth: 400,
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '16px',
  boxShadow: theme.shadows[8],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  animation: `${pulse} 1.5s ease-in-out`,
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[12],
    borderColor: theme.palette.primary.dark,
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '10px 20px',
  textTransform: 'none',
  fontWeight: 'bold',
  minWidth: '180px',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Directly use navigate in the click handler to ensure it works
  const handleManageApiKeys = () => {
    navigate('/manage-api-keys');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Admin Dashboard
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Take control of your system with powerful tools
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <PeopleIcon color="primary" sx={{ fontSize: 60, mb: 3 }} />
              <Typography variant="h4" sx={{ fontWeight: 'medium', textAlign: 'center', mb: 2 }}>
                Manage Users
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                Add, edit, or remove users.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
              <ActionButton variant="contained" color="primary" onClick={() => navigate('/manage-users')}>
                Manage Users
              </ActionButton>
            </CardActions>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <StorageIcon color="primary" sx={{ fontSize: 60, mb: 3 }} />
              <Typography variant="h4" sx={{ fontWeight: 'medium', textAlign: 'center', mb: 2 }}>
                Manage Databases
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                Oversee database operations.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
              <ActionButton variant="contained" color="primary" onClick={() => navigate('/manage-databases')}>
                Manage Databases
              </ActionButton>
            </CardActions>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <KeyIcon color="primary" sx={{ fontSize: 60, mb: 3 }} />
              <Typography variant="h4" sx={{ fontWeight: 'medium', textAlign: 'center', mb: 2 }}>
                Manage API Keys
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                Generate or revoke API keys.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
              {/* Direct navigation instead of using the function */}
              <ActionButton 
                variant="contained" 
                color="primary" 
                onClick={() => navigate('/manage-api-keys')}
              >
                Manage API Keys
              </ActionButton>
            </CardActions>
          </FeatureCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;