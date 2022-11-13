import React from "react";
import { Card, CardContent, Typography, Divider, ButtonBase, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "./styles";

const Rover = ({ rover }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/rover/${id}`);
    }

    return (
        <ButtonBase onClick={() => handleClick(rover.id)}>
            <Card sx={styles.card}>
                <CardContent sx={styles.content}>
                    <Typography variant="h4">{rover.name} Rover</Typography>
                    <Divider />
                    <Typography>Launch Date: {rover.launch_date}</Typography>
                    <Typography>Landing Date: {rover.landing_date}</Typography>
                    <Typography>Photos Taken: {rover.total_photos}</Typography>
                    <Typography>Status: {rover.status.toUpperCase()} as of {rover.max_date}</Typography>
                    <Typography>Cameras:</Typography>
                    {rover.cameras.map((camera) => (
                        <Chip sx={styles.chip} label={camera.name}/>
                    ))}
                </CardContent>
            </Card>
        </ButtonBase>
    );
}

export default Rover;