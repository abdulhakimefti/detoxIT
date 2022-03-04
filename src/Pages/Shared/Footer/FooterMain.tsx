import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './FooterMain.css';
import detoxLogo from '../../../Media/android-icon-192x192.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import map from '../../../Media/Simple-Location-Picker.png'

const FooterMain = () => {
    return (
       <div> 

<div>


<div className="header" style={{zIndex:'1'}}>


<div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>


</div>
        </div>
        <div  style={{borderBottom: '3px solid #EEEFF1' ,marginTop:'0',zIndex:'1100' }}>
        <div className='footerInfo'>
            <Grid container style={{ margin: "50px 0 50px 0" }}>
                <Grid xs={4} sm={4} item md={1.5} >
                   
                  <div className='detoxInfo'>
                  <div>
                        <Link to='#' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>
                            <img className='logoImage' src={detoxLogo} alt="logo" />
                        </Link>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={8} sm={8} md={3} >
              <div className='infoContainer'>
              <p style={{ fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px' }}>Lorem ipsum dolor sit amet <br/>
                consectetur adipisicing elit. <br/> Qui, ducimus?</p>
                <div style={{height:"",display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
        <div>
        <span>
      <SocialIcon
        style={{ width: "30px", height: "30px", marginRight: "8px" }}
        fgColor="white"
        network="facebook"
      />
    </span>
    <span>
      <SocialIcon
        style={{ width: "30px", height: "30px", marginRight: "8px" }}
        fgColor="white"
        network="instagram"
      />
    </span>
    <span>
      <SocialIcon
        style={{ width: "30px", height: "30px", marginRight: "8px" }}
        fgColor="white"
        network="linkedin"
      />
    </span>
        </div>
       
    </div>
    <div style={{margin:"5px 0 0 0",display:'flex',alignItems:'center'}}>
       <EmailOutlinedIcon style={{fontSize:"30px"}}></EmailOutlinedIcon> <span style={{marginLeft:"5px" ,fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px'}}>info@detoxdit.com</span>
       </div>
       <div style={{margin:"5px 0 0 0",display:'flex',alignItems:'center'}}>
       <CallOutlinedIcon style={{fontSize:"30px"}}></CallOutlinedIcon> <span style={{marginLeft:"5px" ,fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px'}}>+880 1800-000000</span>
       </div>
                  </div>
                </Grid>
             
                <Grid className='hide b '  item md={2} style={{marginTop:"-15px"}}>
               <div >
               <Typography style={{ color: 'black', fontWeight: '600' }}>Information

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
               </div>
                </Grid>
                <Grid className='hide' item md={2} style={{marginTop:"-15px"}}>
                <Typography style={{ color: 'black', fontWeight: '600' }}>Our Services

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
                <Grid className='hide' item md={2} style={{marginTop:"-15px"}}>
                <Typography style={{ color: 'black', fontWeight: '600' }}>Address

                    </Typography>
                    <div style={{ marginTop: '20px',fontWeight: '600', textDecoration: 'none', color: '#556270',fontSize:'14px'  }}>
                        Detox IT,Block#A,<br/> Halishahar,Chattogram
                    </div>
                   <div>
                       <img style={{width:'200px',height:"100px"}} src={map} alt="map" />
                   </div>
                </Grid>
            </Grid>
        </div>
    </div>
        <div className='copyRightContainer'>
        <p  className='copytypo' style={{ fontWeight: '600', textDecoration: 'none', color: '#556270' }}>Copyright©2022 detoxdit.com||All Rights Reserved||Developed By Abdul  Hakim</p>
        </div>
       </div>
    );
};

export default FooterMain;