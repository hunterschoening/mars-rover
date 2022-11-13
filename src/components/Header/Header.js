import React from "react";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./styles";

const Header = () => {
    return (
        <Link to='/' style={{textDecoration: 'none'}}>
            <Paper sx={styles.header}>Nasa Mars Rover Explorer!</Paper>
        </Link>
    );
};

export default Header;