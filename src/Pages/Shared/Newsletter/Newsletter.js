import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import newsletterBg from '../../../Media/newsletter.png'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div style={{ backgroundImage: `url(${newsletterBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: "650px", zIndex: '-1100', position: 'relative', top: '-250px' }}>
                <Grid container className='grid' >
                    <Grid item xs={12} sm={12} md={5} >
                       <div className='newsContainer' style={{ marginLeft: '20%',marginRight:'20%'}}>
                       <Typography style={{ color: 'white', fontWeight: '700' }}>UPDATES</Typography>
                        <Typography style={{ color: 'white', fontSize: '42px', marginTop: '25px',lineHeight:'42px' }}>Join our <br /> mailing list
                        </Typography>
                        <Typography style={{ color: 'white', fontSize: '14px', marginTop: '25px', width:'100%' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt lorem ipsum dolor sit amet </Typography>
                       </div>
                    </Grid>
                    <Grid  xs={12} sm={12} item md={7}>
                    <div className='inputs'>
                       <div><div className='inputsD' style={{marginBottom:'10px'}}>
                       <input className='sameInput' style={{marginBottom:'10px'}}  placeholder='First Name'></input>
                       <input className='sameInput' placeholder='Last Name'></input>
                       </div>
                       <input className='diffInput' placeholder='Email'></input>
                    </div>
                    <Button style={{color:'white',fontSize:'12px',backgroundColor:'#FF6B6B',marginTop:'20px',padding:'10px 16px'}}>Send Me Email</Button></div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Newsletter;