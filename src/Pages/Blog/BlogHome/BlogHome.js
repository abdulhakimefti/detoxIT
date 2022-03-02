import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import blogImage from '../../../Media/blogImage.png'

const BlogHome = () => {
    return (
        <div style={{ marginLeft: '14%',marginBottom:'50px',marginTop:'25px' }}>
            <Grid container>
                <Grid item md={6}>
                    <div>

                        <Typography variant='span' style={{ fontWeight: '700', backgroundColor: '#F4DDDF', color: "red", }}>BLOG</Typography>
                        <div style={{ margin: "20px 0" }}><Typography variant='span' style={{ fontSize: '48px', color: "#556270", }}>Latest News</Typography></div>


                    </div>

                    <Grid container>
                        <Grid item md={3}>
                            <Typography variant='span' style={{ padding: '2px 5px', fontWeight: '500', backgroundColor: 'red', color: "white", }}>14 feb 2022</Typography>
                            <div style={{ borderLeft: '2px solid red', height: '200px', margin: '0 45px' }}></div>
                        </Grid>
                        <Grid item md={9}>
                            <Typography style={{ fontSize: '24px', width: "70%" }}>Turning customers into partners and friends
                            </Typography>
                            <Typography style={{ fontSize: '14px', width: "70%", marginTop: '25px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam adipiscing elit, sed diam consectetuer adipiscing elit, sed diam adipiscing elit, sed diam...
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={3}>
                            <Typography variant='span' style={{ padding: '2px 5px', fontWeight: '500', backgroundColor: 'red', color: "white", }}>11 jan 2022</Typography>
                            <div style={{ borderLeft: '2px solid red', height: '200px', margin: '0 45px' }}></div>
                        </Grid>
                        <Grid item md={9}>
                            <Typography style={{ fontSize: '24px', width: "70%" }}>Improving usability to increase satisfaction
                            </Typography>
                            <Typography style={{ fontSize: '14px', width: "70%", marginTop: '25px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam adipiscing elit, sed diam consectetuer adipiscing elit, sed diam adipiscing elit, sed diam...
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={3}>
                            <Typography variant='span' style={{ padding: '2px 5px', fontWeight: '500', backgroundColor: 'red', color: "white", }}>11 dec 2021</Typography>
                            <div style={{ borderLeft: '2px solid red', height: '250px', margin: '0 45px' }}></div>
                        </Grid>
                        <Grid item md={9}>
                            <Typography style={{ fontSize: '24px', width: "70%" }}>Using data analysis insight to inform decisions

                            </Typography>
                            <Typography style={{ fontSize: '14px', width: "70%", marginTop: '25px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam adipiscing elit, sed diam consectetuer adipiscing elit, sed diam adipiscing elit, sed diam...
                            </Typography>
                        </Grid>
                    </Grid>



                </Grid>
                <Grid item md={6}>
                    <div style={{ backgroundColor: '#FF6B6B', height: '800px', }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img style={{ width: '85%', marginTop: "50px" }} src={blogImage} />
                        </div>
                    </div>
                   <div style={{display:'flex',justifyContent:"center"}}>

                   <div style={{ width: "400px",height:"300px",backgroundColor:'white',marginTop:"-350px",zIndex:'1100' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='span' style={{ backgroundColor: '#556270', color: 'white', padding: '8px 14px',marginTop:"-15px" }}>DECEMBER 2021</Typography>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: "90%" }}>
                                <Typography style={{ fontSize: '32px', textAlign: 'center', margin: '15px 0',color:'#556270' }}>Building real relationships
                                </Typography>
                                <div>
                                    <Typography style={{ fontSize: '14px', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    </Typography>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default BlogHome;