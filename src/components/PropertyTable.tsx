import * as React from 'react';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { imageUrl } from '../utils/callApi';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BedIcon from '@mui/icons-material/Bed';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                                image={imageUrl + property.images[0].file_key}
                            />
                            <CardContent sx={{ minHeight: 150 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {property?.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: "center", marginTop: "10px" }}>
                                    <LocationOnIcon sx={{ marginRight: "5px", height: '15px' }} />
                                    {property?.address}
                                </Typography>
                                <Box sx={{ display: 'flex', marginTop: "10px" }}>
                                    <Typography variant="caption" color="text.secondary" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginRight: '10px'
                                    }}>
                                        <BedIcon sx={{ marginRight: "5px", height: '15px' }} /> {property?.capacity}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginRight: '10px'
                                    }}>
                                        <LocationCityIcon sx={{ marginRight: "5px", height: '15px' }} /> {property?.city}

                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginRight: '10px'
                                    }}>
                                        <PublicIcon sx={{ marginRight: "5px", height: '15px' }} /> {property?.country}

                                    </Typography>
                                </Box>

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