import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import card1 from '../../../Media/card1.png'
import card2 from '../../../Media/card2.png'
import card3 from '../../../Media/card3.png'

const Services = () => {
    return (
        <div style={{margin:'50px 0'}}>
            <Box style={{ margin: "0 14%" }}>
                <Typography variant='span' style={{ fontWeight: '700', backgroundColor: '#F4DDDF', color: "red" }}>BUSINESS PACKAGES
                </Typography>
                <div style={{ margin: "35px 0" }}><Typography variant='span' style={{ fontSize: '48px', color: "#556270", backgroundColor: '#F4DDDF' }}>Tailored to your needs</Typography></div>
                <Grid container>
                    <Grid item md={4} style={{marginRight:"0"}}>
                        <div style={{ backgroundColor: "white", boxShadow: '-1px 1px 6px 0px rgba(0,0,0,0.75)', display: "flex", justifyContent: 'center', alignItems: 'center',width:'300px' }}>
                           <div style={{margin:'40px 25px'}}>
                           <div style={{ backgroundColor: '#F4DDDF', width: '250px', height: '250px', borderRadius: '50%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ width: "200px" }}>
                                    <img style={{ width: '180px' }} src={card1} alt='Card Image' />
                                </div>
                            </div>
                            <div>
                                <Typography style={{ fontSize: '24px', fontWeight: '500', margin: "15px 0" }}>Home helper
                                </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: '400', margin: "5px 0" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam

                                </Typography>
                            </div>
                           </div>
                           
                        </div>
                    </Grid>
                    <Grid item md={4} style={{marginRight:"0"}}>
                        <div style={{ backgroundColor: "#FF6B6B", boxShadow: '-1px 1px 6px 0px rgba(0,0,0,0.75)', display: "flex", justifyContent: 'center', alignItems: 'center',width:'300px' }}>
                           <div style={{margin:'40px 25px'}}>
                           <div style={{ backgroundColor: '#C44D58', width: '250px', height: '250px', borderRadius: '50%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ width: "180px" }}>
                                    <img style={{ width: '160px' }} src={card2} alt='Card Image' />
                                </div>
                            </div>
                            <div>
                                <Typography style={{ fontSize: '24px', fontWeight: '500', margin: "15px 0" }}>Home helper
                                </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: '400', margin: "5px 0" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam

                                </Typography>
                            </div>
                           </div>
                           
                        </div>
                    </Grid>
                    <Grid item md={4} style={{marginRight:"0"}}>
                        <div style={{ backgroundColor: "white", boxShadow: '-1px 1px 6px 0px rgba(0,0,0,0.75)', display: "flex", justifyContent: 'center', alignItems: 'center',width:'300px' }}>
                           <div style={{margin:'40px 25px'}}>
                           <div style={{ backgroundColor: '#F4DDDF', width: '250px', height: '250px', borderRadius: '50%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ width: "180px" }}>
                                    <img style={{ width: '150px' }} src={card3} alt='Card Image' />
                                </div>
                            </div>
                            <div>
                                <Typography style={{ fontSize: '24px', fontWeight: '500', margin: "15px 0" }}>Home helper
                                </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: '400', margin: "5px 0" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam

                                </Typography>
                            </div>
                           </div>
                           
                        </div>
                    </Grid>
                </Grid>

            </Box>
            <div style={{backgroundColor:'#EEEFF1',height:"400px",margin:"-350px 0 0 100px"}}></div>
        </div>
    );
};

export default Services;