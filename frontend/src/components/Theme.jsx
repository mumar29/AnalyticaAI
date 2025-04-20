// Example: src/theme.js
import { createTheme, alpha } from '@mui/material/styles';
import { red, green, orange, blue, grey } from '@mui/material/colors';

const Theme = createTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: green[A400] },
    error: { main: red[500] },
    warning: { main: orange[500] },
    success: { main: green[500] },
    grey: {
        main: grey[500],
        ...grey
    },
    text: {
        primary: grey[900],
        secondary: grey[700],
    },
    action: {
        active: blue[500],
        hover: alpha(blue[500], 0.08),
        selected: alpha(blue[500], 0.16),
        disabled: alpha(grey[500], 0.3),
        disabledBackground: alpha(grey[500], 0.12),
    },
    background: {
        default: grey[50],
        paper: '#ffffff',
    },
    divider: alpha(grey[500], 0.6), // Ensure divider is defined if used
  },
  shape: {
    borderRadius: 8, // Example, adjust as needed
  },
  // Add shadows if needed by styled components
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)', // elevation 1
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)', // elevation 2
    // ... add more elevations as needed up to 24
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)', // elevation 3
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)', // elevation 4
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)', // elevation 5
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)', // elevation 6
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)', // elevation 7
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', // elevation 8
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)', // elevation 9
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)', // elevation 10
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)', // elevation 11
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)', // elevation 12
    // ... up to 24
  ],
  // ... other theme options
});

export default Theme;