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
import LinearProgress from '@mui/material/LinearProgress';
import AddressSection from "../components/AddressSection";

export const ViewDetails = () => {
    const [property, setProperty] = React.useState<any>({})
    const { id } = useParams();
    const [loading, setLoading] = React.useState(true)



    React.useEffect(() => {
        (async () => {
            try {

                let response = await callApi('/get-properties-by-id', { id })
                if (response.success) {
                    setProperty(response.data[0])
                }
                setLoading(false)
            }
            catch (err) {
                setLoading(false)
            }
        })()
    }, [id])

    return (
        <div className="details-section">
            {loading ? (
                <LinearProgress></LinearProgress>
            ) : (
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
                                <AddressSection property={property}></AddressSection>
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
            )}

        </div>
    )
}


export default ViewDetails