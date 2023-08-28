import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const Header = () => {
  return (
    <>
 
<Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
  <Toolbar>
    
    <Typography sx={{ flexGrow: 1 }}>
    <Link style={{color:"white"}} to="/">Home</Link>

    </Typography>
    <Typography sx={{ flexGrow: 1 }}>
    <Link style={{color:"white"}} to="/create">Create</Link>

    </Typography>
  </Toolbar>
</AppBar>
</Box>
        </>
  );
};

export default Header;
