import * as React from 'react';
import './App.css';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { routes } from './routes';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import callApi from './utils/callApi';


// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];
function App() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const scrapeButtonClicked = () => {
    (async ()=>{
      try {
        let response = await callApi('/scrape-data-from-sources', { type: 'get' })
      }
      catch (err) {
  
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
            <IconButton
              // color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
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
        </div>
      </main>
    </div>
  );
}

export default App;
