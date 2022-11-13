import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const CustomDatePicker = ({ date, setDate }) => {
  
    return (
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disableFuture
            label="Pick a Date!"
            value={date}
            onChange={(newDate) => {
              let formattedDate = new Date(newDate).toJSON().substring(0, 10);
              setDate(formattedDate);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </ThemeProvider>
    );
  };
  
  export default CustomDatePicker;