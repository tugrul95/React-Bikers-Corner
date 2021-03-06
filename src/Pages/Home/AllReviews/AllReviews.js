import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mocki.io/v1/8ff680f3-4716-4e24-a49d-68caf0617b6c')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            });
    }, [])

    
    return (
        <>
        
            <Container sx={{backgroundColor:'rgb(35, 34, 34)', paddingBottom:20, paddingTop: 3, marginTop: 3, marginBottom: 3}} >
                <h1 style={{color:'white' }}>Customer Reviews</h1>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>

                    {
                        reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default AllReviews;