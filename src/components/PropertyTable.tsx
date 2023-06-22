import * as React from 'react';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { getImageUrl } from '../utils/common';
import AddressSection from './AddressSection';

const PropertyTable = (props: any) => {
    const { properties } = props
    return (
        <Grid container sx={{ width: '100%', display: 'background.paper' }} columnSpacing={2} rowSpacing={2}>
            {properties?.map((property: any, index: number) => {
                return (
                    <Grid key={`property-${index}-${property.id}`} item xs={12} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, height: "100%" }} >
                            <CardMedia
                                component="img"
                                alt="property image"
                                height="200"
                                image={getImageUrl(property.images[0].file_url)}
                            />
                            <CardContent sx={{ minHeight: 150 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {property?.name}
                                </Typography>
                                <AddressSection property={property}></AddressSection>
                            </CardContent>
                            <CardActions sx={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>

                                <Link to={"/view-details/" + property.id} style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}>
                                    <Button variant='contained'>
                                        View Details
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>


                )
            })}


        </Grid>
    )
}
export default PropertyTable