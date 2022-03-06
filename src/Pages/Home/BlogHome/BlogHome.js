import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import blogImage from '../../../Media/blogImage.png'
import './BlogHome.css'

const BlogHome = () => {
    return (
        <div className='blogContainer' style={{ marginBottom: '50px', marginTop: '25px' }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <div className='eventContainer' >
                        <div >

                            <span className='blog' variant='span' style={{ fontWeight: '700', backgroundColor: '#F4DDDF', color: "red", }}>BLOG</span>
                            <div className='blogHeadingDiv' ><h1 className='blogHeading' style={{ color: "#556270", }}>Latest News</h1> </div>


                        </div>

                        <Grid container>
                            <Grid item xs={4} sm={4} md={3}>
                                <span className='blogDate' style={{ fontWeight: '500', backgroundColor: 'red', color: "white", }}>14 feb 2022</span>
                                <div className='borderHeight' style={{ borderLeft: '2px solid red', margin: '0 45px' }}></div>
                            </Grid>
                            <Grid item xs={8} sm={8} md={9}>
                                <p className='eventHeading'>Turning customers into partners and friends
                                </p>
                                <p className='eventPara' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam adipiscing elit, sed diam consectetuer adipiscing elit, sed diam adipiscing elit, sed diam...
                                </p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4} sm={4} md={3}>
                                <span className='blogDate' style={{ fontWeight: '500', backgroundColor: 'red', color: "white", }}>11 jan 2022</span>
                                <div className='borderHeight' style={{ borderLeft: '2px solid red', margin: '0 45px' }}></div>
                            </Grid>
                            <Grid item xs={8} sm={8} md={9}>
                                <p className='eventHeading'>Improving usability to increase satisfaction
                                </p>
                                <p className='eventPara' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam adipiscing elit, sed diam consectetuer adipiscing elit, sed diam adipiscing elit, sed diam...
                                </p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4} sm={4} md={3}>
                                <span className='blogDate' style={{ fontWeight: '500', backgroundColor: 'red', color: "white", }}>11 dec 2021</span>
                                <div className='borderHeightD' style={{ borderLeft: '2px solid red', margin: '0 45px' }}></div>
                            </Grid>
                            <Grid item xs={8} sm={8} md={9}>
                                <p className='eventHeading'>Using data analysis insight to inform decisions

                                </p>
                                <p className='eventPara' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam adipiscing elit, sed diam consectetuer adipiscing elit, sed diam adipiscing elit, sed diam...
                                </p>
                            </Grid>
                        </Grid>

                    </div>


                </Grid>
                <Grid className='dynamicImage' item xs={12} sm={12} md={6}>
                    <div className='imageContainer' style={{ backgroundColor: '#FF6B6B', }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img className='imageBlog' src={blogImage} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "center" }}>

                        <div className='imageCard' style={{ backgroundColor: 'white', zIndex: '1000' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span className='imageDate' style={{ backgroundColor: '#556270', color: 'white', marginTop: "-15px" }}>DECEMBER 2021</span>

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ width: "90%" }}>
                                    <p className='cardHeading' style={{ textAlign: 'center', color: '#556270' }}>Building real relationships
                                    </p>
                                    <div>
                                        <p className='cardPara' style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                        </p>

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