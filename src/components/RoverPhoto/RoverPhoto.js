import React from "react";
import { Card, CardMedia } from "@mui/material";

const RoverPhoto = ({ url }) => {
    return (
        <Card>
            <CardMedia component="img" src={url} height='300px'/>
        </Card>
    )
};

export default RoverPhoto;