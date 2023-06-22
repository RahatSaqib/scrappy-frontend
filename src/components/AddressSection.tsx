
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BedIcon from '@mui/icons-material/Bed';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function AddressSection(props: any) {
    const { property } = props
    const styleOfAddress = {
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px'
    }
    const iconStyle = { marginRight: "5px", height: '15px' }

    const sectionArray = [
        {
            value: property.capacity,
            icon: <BedIcon sx={iconStyle} />
        },
        {
            value: property.city,
            icon: <LocationCityIcon sx={iconStyle} />
        },
        {
            value: property.country,
            icon: <PublicIcon sx={iconStyle} />
        },

    ]

    return (
        <>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: "center", marginTop: "10px" }}>
                <LocationOnIcon sx={iconStyle} />
                {property?.address}
            </Typography>
            <Box sx={{ display: 'flex', marginTop: "10px" }}>
                {sectionArray.map((item, index) => {
                    return (
                        <Typography key ={`address-icon-${index}`}variant="caption" color="text.secondary" style={styleOfAddress}>
                            {item.icon} {item.value}
                        </Typography>
                    )
                })}
            </Box>
        </>
    )
}