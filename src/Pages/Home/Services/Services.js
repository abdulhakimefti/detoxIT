import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import card1 from '../../../Media/card1.png'
import card2 from '../../../Media/card2.png'
import card3 from '../../../Media/card3.png'
import './Services.css'

const Services = () => {
    return (
        <div style={{margin:'50px 0'}}>
            <div className='box' >
                <Typography variant='span' style={{ fontWeight: '700', backgroundColor: '#F4DDDF', color: "red" }}>BUSINESS PACKAGES
                </Typography>
                <div className='serviceHeading' style={{ margin: "35px 0" }}><Typography variant='span' style={{ color: "#556270", backgroundColor: '#F4DDDF' }}>Tailored to your needs</Typography></div>
                <Grid container>
                    <Grid item sm={4} md={4} xs={12} style={{marginRight:"0"}}>
                        <div className='card' style={{ backgroundColor: "white", boxShadow: '-1px 1px 6px 0px rgba(0,0,0,0.75)', display: "flex", justifyContent: 'center', alignItems: 'center', }}>
                           <div className='subCard' >
                           <div className='imageRadius' style={{ backgroundColor: '#F4DDDF',  borderRadius: '50%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div className='imagediv' >
                                    <img className='image'  src={card1} alt='Card Image' />
                                </div>
                            </div>
                            <div>
                                <h1 className='detailsHeading' style={{  fontWeight: '500', margin: "15px 0" }}>Home helper
                                </h1>
                                <p className='detailsPara' style={{fontWeight: '400', margin: "5px 0" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam

                                </p>
                            </div>
                           </div>
                           
                        </div>
                    </Grid>
                    <Grid item sm={4} md={4} xs={12}  style={{marginRight:"0"}}>
                        <div className='card' style={{ backgroundColor: "#FF6B6B", boxShadow: '-1px 1px 6px 0px rgba(0,0,0,0.75)', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                           <div className='subCard' >
                           <div className='imageRadius' style={{ backgroundColor: '#C44D58',  borderRadius: '50%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div className='imagediv' >
                                    <img className='image' src={card2} alt='Card Image' />
                                </div>
                            </div>
                            <div>
                                <h1 className='detailsHeading' style={{ fontWeight: '500', margin: "15px 0" }}>Home helper
                                </h1>
                                <p className='detailsPara' style={{  fontWeight: '400', margin: "5px 0" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam

                                </p>
                            </div>
                           </div>
                           
                        </div>
                    </Grid>
                    <Grid item sm={4} md={4} xs={12}  style={{marginRight:"0"}}>
                        <div  className='card' style={{ backgroundColor: "white", boxShadow: '-1px 1px 6px 0px rgba(0,0,0,0.75)', display: "flex", justifyContent: 'center', alignItems: 'center',}}>
                           <div className='subCard' >
                           <div className='imageRadius' style={{ backgroundColor: '#F4DDDF', borderRadius: '50%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div className='imagediv' >
                                    <img className='image' src={card3} alt='Card Image' />
                                </div>
                            </div>
                            <div>
                                <h1 className='detailsHeading' style={{ fontWeight: '500', margin: "15px 0" }}>Home helper
                                </h1>
                                <p className='detailsPara' style={{ fontWeight: '400', margin: "5px 0" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam

                                </p>
                            </div>
                           </div>
                           
                        </div>
                    </Grid>
                </Grid>

            </div>
            <div style={{backgroundColor:'#EEEFF1',height:"400px",margin:"-350px 0 0 100px"}}></div>
        </div>
    );
};

export default Services;