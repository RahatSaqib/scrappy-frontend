
import * as React from 'react';

import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import PropertyTable from '../components/PropertyTable';
import callApi from '../utils/callApi';

export const Homepage = () => {
    const [searchString, setSearchString] = React.useState('')
    const [properties, setProperties] = React.useState([])

    async function searchProperties(searchString: string) {
        try {
            let response = await callApi('/search-properties', { searchString: searchString.toLowerCase() })
            if (response.success) {
                setProperties(response.data)
            }
        }
        catch (err) {

        }
    }
    React.useEffect(() => {
        (async () => { await searchProperties('') })()
    }, [])

    async function handleChange(val: string) {
        setSearchString(val)
    }

    async function searchButtonClicked() {
        await searchProperties(searchString)
    }


    return (
        <React.Fragment>
            <Box className='search-section'>
                <Typography variant='h3'>
                    Find your desired property
                </Typography>
                <Box>
                    <TextField
                        id="filled-search"
                        placeholder="Search by name / city / country"
                        type="search"
                        // variant="filled"
                        size='small'
                        sx={{
                            '.MuiOutlinedInput-root' :{
                                background:'white',
                                height: '40px',
                                marginRight:'10px',
                                border: '1px solid #eee !important',
                                borderRadius:'10px'
                            },
                            '.MuiInputBase-root':{
                                // border: 'none !important',
                                
                            }

                
                        }}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <Button variant="contained" startIcon={<SearchIcon />} onClick={searchButtonClicked}>
                        Search
                    </Button>
                </Box>

            </Box>

            <Box className='search-result'>
                <PropertyTable properties={properties}></PropertyTable>
            </Box>

        </React.Fragment>
    )
}


export default Homepage