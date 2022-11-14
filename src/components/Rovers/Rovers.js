import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper } from "@mui/material";

import Rover from "./Rover/Rover";
import { clearRoverPhotos } from "../../actions";

import styles from "./styles";

const Rovers = () => {
    const rovers = useSelector((state) => state.rovers);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(clearRoverPhotos());
    });

    if (!rovers) return (<Paper>Oops, looks like there aren't any rovers to display</Paper>); 

    return (
        <>
            <Grid container spacing={3} alignItems='stretch' sx={styles.container}>
                {rovers.map((rover) => (
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Rover rover={rover}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Rovers;