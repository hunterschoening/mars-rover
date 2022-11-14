import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";

import theme from './styles';

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