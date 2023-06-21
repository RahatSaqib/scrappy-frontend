import { useParams } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import callApi from "../utils/callApi";
import { ImageSlider } from "../components/ImageSlider";
import { Link } from 'react-router-dom';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { GoogleMapComp } from "../components/GoogleMap";
import BedIcon from '@mui/icons-material/Bed';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const ViewDetails = () => {
    const [property, setProperty] = React.useState<any>({})
    const { id } = useParams();
    React.useEffect(() => {
        (async () => {
            try {

                let response = await callApi('/get-properties-by-id', { id })
                console.log({ response })
                if (response.success) {
                    console.log(response.data[0])

                    setProperty(response.data[0])
                }
            }
            catch (err) {

            }
        })()
    }, [id])

    return (
        <div className="details-section">
            <Grid container rowSpacing={3}>
                <Grid item xs={12}>
                    <Link to="/" style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <KeyboardBackspaceIcon sx={{
                            marginRight: "5px"
                        }}></KeyboardBackspaceIcon>  Back to Search
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant="h3"
                    >
                        {property?.name}
                    </Typography>
                    <Typography
                        variant="body2"
                    >
                        Total Capacity : {property?.capacity}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <ImageSlider images={property?.images}> </ImageSlider>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {property?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: "center", marginTop: "10px" }}>
                                <LocationOnIcon sx={{ marginRight: "5px" }} />
                                {property?.address}
                            </Typography>
                            <Box sx={{ display: 'flex', marginTop: "10px" }}>
                                <Typography variant="caption" color="text.secondary" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: '10px'
                                }}>
                                    <BedIcon sx={{ marginRight: "5px" }} /> {property?.capacity}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: '10px'
                                }}>
                                    <LocationCityIcon sx={{ marginRight: "5px" }} /> {property?.city}

                                </Typography>
                                <Typography variant="caption" color="text.secondary" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: '10px'
                                }}>
                                    <PublicIcon sx={{ marginRight: "5px" }} /> {property?.country}

                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: "center", marginTop: "10px" }}>

                                Zip Code: {property?.zipcode}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: "center", marginTop: "10px" }}>

                                Type: {property?.type}
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <GoogleMapComp address={property?.address}>

                    </GoogleMapComp>
                </Grid>



            </Grid>
        </div>
    )
}


export default ViewDetails