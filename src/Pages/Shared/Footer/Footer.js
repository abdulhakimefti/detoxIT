import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div style={{ marginTop: "-230px", }}>
            <div style={{ borderTop: '10px solid #EEEFF1',borderBottom: '3px solid #EEEFF1'  }}>
                <div>
                    <Grid container style={{ margin: "50px 0 50px 0" }}>
                        <Grid item md={1.5} style={{marginLeft:'10%'}}>
                            <Typography style={{ color: 'red', fontWeight: '600' }}>Memberships
                            </Typography>
                            <div style={{ marginTop: '20px' }}>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>How to join
                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Member benefits

                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Member login


                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Contact info


                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Partners

                                </Link>
                            </div>
                        </Grid>
                        <Grid item md={1.5}>
                        <Typography style={{ color: 'red', fontWeight: '600' }}>Sales packages

                            </Typography>
                            <div style={{ marginTop: '20px' }}>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Pricing information

                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Knowledge base

                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Product features



                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Integrations



                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Custom API


                                </Link>
                            </div>
                        </Grid>
                        <Grid item md={2}>
                        <Typography style={{ color: 'red', fontWeight: '600' }}>Help and guidance

                            </Typography>
                            <div style={{ marginTop: '20px' }}>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>How to join

                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Member benefits

                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Member benefits



                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Member login



                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Partners

                                </Link>
                            </div>
                        </Grid>
                        <Grid item md={2}>
                        <Typography style={{ color: 'red', fontWeight: '600' }}>About our business

                            </Typography>
                            <div style={{ marginTop: '20px' }}>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>How to join
                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Member benefits

                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Member login


                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Contact info


                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Partners

                                </Link>
                            </div>
                        </Grid>
                        <Grid item md={1.5}>
                        <Typography style={{ color: 'red', fontWeight: '600' }}>Support tickets

                            </Typography>
                            <div style={{ marginTop: '20px' }}>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>How to join
                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Member benefits

                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Member login


                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Contact info


                                </Link>
                            </div>
                            <div>
                                <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Partners

                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div style={{height:"50px",display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                <div style={{marginRight:'50px'}}>
                <span>
              <SocialIcon
                style={{ width: "35px", height: "35px", marginRight: "8px" }}
                fgColor="white"
                network="facebook"
              />
            </span>
            <span>
              <SocialIcon
                style={{ width: "35px", height: "35px", marginRight: "8px" }}
                fgColor="white"
                network="instagram"
              />
            </span>
            <span>
              <SocialIcon
                style={{ width: "35px", height: "35px", marginRight: "8px" }}
                fgColor="white"
                network="linkedin"
              />
            </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;