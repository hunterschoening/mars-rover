/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Grid, Paper, Typography, Container, Card } from '@mui/material';

import RoverPhoto from '../RoverPhoto/RoverPhoto';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import styles from './styles';

import { getRoverPhotos, clearRoverPhotos } from '../../actions';

let page = 1;

const RoverDetail = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const roverId = Number(params?.id); //Cast param to number for comparison
    const rovers = useSelector((state) => state.rovers);
    const photos = useSelector((state) => state.photos);
    const rover = rovers.filter((r) => (r.id === roverId));
    const roverName = rover[0]?.name;
    const lastPhotoDate = rover[0]?.max_date;
    const [ date, setDate ] = useState(new Date(lastPhotoDate).toJSON().substring(0, 10));

    useEffect(() => {
        page = 1;
        dispatch(clearRoverPhotos());
        dispatch(getRoverPhotos(roverName, page, date));
    }, [date]);

    const fetchPictures = () => {
        page = page + 1;
        dispatch(getRoverPhotos(roverName, page, date));
    };

    return (
        <Container maxWidth="xl">
            <Card sx={styles.datePicker}>
                <Typography sx={styles.text}>Select a date to see images for that day!</Typography>
                <CustomDatePicker date={date} setDate={setDate}/>
            </Card>
            {(photos.length === 0) ? 
                <Paper sx={styles.noPhotos} style={{whiteSpace: 'pre-line'}}>
                    <Typography sx={styles.text}>Uh Oh! Looks like the {roverName} Rover didn't take any photos for the selected date.</Typography>
                    <Typography sx={styles.text}>Please try another date to see pictures taken by the {roverName} Rover.</Typography>
                    <Typography sx={styles.text}>Reminder - The {roverName} Rover landed on {rover[0]?.landing_date} and the latest pictures are from {lastPhotoDate}</Typography>
                </Paper>
                :
                <InfiniteScroll
                    dataLength={photos.length}
                    next={() => {
                        fetchPictures()
                    }}
                    scrollThreshold={0.5}
                    hasMore={true}
                    endMessage={<Paper>That's all the photos for the selected date!</Paper>}
                >
                    <Grid container spacing={3} alignItems='stretch' sx={styles.container}>
                        {photos.map((photo) => (
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <RoverPhoto url={photo.img_src} />
                                </Grid>
                        ))}
                    </Grid>
                </InfiniteScroll>
            }
        </Container>
    );
};

export default RoverDetail;