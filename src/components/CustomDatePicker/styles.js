import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {
            color: '#2C3E50'
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: '#2C3E50'
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#2C3E50'
          }
        }
      }
    }
  });

  export default theme;