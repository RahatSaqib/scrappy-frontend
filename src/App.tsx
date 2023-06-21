import * as React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { routes } from './routes';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import callApi from './utils/callApi';
import ScrapingModal from './components/ScrapingModal';


// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];
function App() {

  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen((prevState) => !prevState);
  // };

  const [open, setOpen] = React.useState<any>(false);
  const handleOpen: any = () => {
    setLoading(true)
    setOpen(true)
  };
  const handleClose: any = () => {
    setLoading(false)
    setOpen(false)
  };
  const [loading, setLoading] = React.useState(false)
  const [message, setResponseMessage] = React.useState('Scrapping From Data Sources...')


  const scrapeButtonClicked = () => {
    handleOpen();
    (async () => {
      try {
        let response = await callApi('/scrape-data-from-sources', {})
        if (response.success) {
          setResponseMessage(response.message)
          setLoading(false)
          window.location.reload()
        }
        else {
          setResponseMessage('Failed To Scrape')
        }
        setLoading(false)
      }
      catch (err) {
        setResponseMessage('Failed To Scrape')
        setLoading(false)
      }
    })()

  }

  return (
    <div className="App">
      <main>
        <CssBaseline />
        <AppBar position="relative" component="nav" sx={{
          boxShadow: '1px 2px 5px #eee',
          borderBottom: '1px solid #eee'
        }}>
          <Toolbar sx={{
            background: "#fff",
            boxShadow: 'none'
          }}>
            {/* <IconButton
              // color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: '#6c48f7' } }}
            >
              Scrappy
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff', background: "#6c48f7" }} variant='contained' onClick={scrapeButtonClicked}>
                Scrape Data From Sources
              </Button>

            </Box>
          </Toolbar>
        </AppBar>
        <div className='container'>
          <Routes>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={<item.element />} />
            ))}
          </Routes>
          <ScrapingModal handleClose={handleClose} open={open} loading={loading} message={message}></ScrapingModal>
        </div>
      </main>
    </div>
  );
}

export default App;
