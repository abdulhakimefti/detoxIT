import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import newsletterBg from '../../../Media/newsletter.png'

const Newsletter = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${newsletterBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: "650px", zIndex: '-1100', position: 'relative', top: '-250px' }}>
                <Grid container >
                    <Grid item md={5} >
                       <div style={{ margin: '200px 20% 0 20%'}}>
                       <Typography style={{ color: 'white', fontWeight: '700' }}>UPDATES</Typography>
                        <Typography style={{ color: 'white', fontSize: '42px', marginTop: '25px',lineHeight:'42px' }}>Join our <br /> mailing list
                        </Typography>
                        <Typography style={{ color: 'white', fontSize: '14px', marginTop: '25px', width:'100%' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt lorem ipsum dolor sit amet </Typography>
                       </div>
                    </Grid>
                    <Grid item md={7}>
                    <div style={{ margin: '250px 0 0 0'}}>
                       <div style={{display:"flex",marginBottom:'10px'}}>
                       <input style={{padding:'10px 40px 10px 10px',margin:'0 5px 0 0'}} placeholder='First Name'></input>
                       <input style={{padding:'10px 40px 10px 10px',}}  placeholder='Last Name'></input>
                       </div>
                       <input style={{padding:'10px 270px 10px 10px',}} placeholder='Email'></input>
                    </div>
                    <Button style={{color:'white',fontSize:'12px',backgroundColor:'#FF6B6B',marginTop:'20px',padding:'10px 16px'}}>Send Me Email</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Newsletter;