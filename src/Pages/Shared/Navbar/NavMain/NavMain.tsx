import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import './NavMain.css';

const NavMain = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar style={{backgroundColor:'white',color:'#556270',display:'flex',justifyContent:'space-between'}}>
              <Typography style={{fontWeight:'900',marginLeft:'4%',fontSize:"24px"}}>DETOX IT</Typography>
            <div  style={{display:'flex',alignItems:'center',marginRight:'10%'}}>
            <div style={{display:'flex',}}>
               <Link to="#" className="pullDown" style={{color:'#556270',textDecoration:'none', fontWeight:'700',marginRight:'15px', position: 'relative',zIndex:0,cursor:"pointer"}}>About </Link>
                  <Link to="#" className="pullDown" style={{color:'#556270',textDecoration:'none',fontWeight:'700',marginRight:'15px', position: 'relative',zIndex:0,cursor:"pointer"}}>Services </Link>
                  <Link to="#" className="pullDown" style={{color:'#556270',textDecoration:'none',fontWeight:'700',marginRight:'15px', position: 'relative',zIndex:0,cursor:"pointer"}}>News </Link>
                  <Link to="#" className="pullDown" style={{color:'#556270',textDecoration:'none',fontWeight:'700',marginRight:'25px', position: 'relative',zIndex:0,cursor:"pointer"}}>Gallery </Link>
                  
              </div>
              <Button style={{color:'white',backgroundColor:'#FF6B6B',padding:'8px 16px'}}>JOIN US</Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavMain;
