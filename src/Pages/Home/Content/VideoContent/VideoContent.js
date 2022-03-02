import React from 'react';
import videoContentBg from '../../../../Media/videoContent.png';
import videoImage from '../../../../Media/video.png';
import { Grid, Typography } from '@mui/material';

const VideoContent = () => {
    return (
        <div style={{zIndex:'1100'}}>
            <div style={{backgroundImage:`url(${videoContentBg})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',width:'100%',height:"650px"}}>

                <Grid container>
                    <Grid item md={6}>
                        <div style={{display:'flex',justifyContent:'center' ,marginTop:'100px'}} >
                            <img style={{width:'422px',height:'352px' }} src={videoImage} />
                        </div>
                    </Grid>
                    <Grid item md={6} >
                      <div style={{margin:'50px 0 0 50px',width:'85%'}}>
                          <Typography style={{color:'red',fontWeight:'700'}}>CUSTOMERS</Typography>
                          <Typography style={{margin:'50px 0',fontSize:'32px',fontWeight:'600',color:'#556270'}}>
                          We turn our clients into business partners, its why people use us 

                          </Typography>
                          <Typography style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad  sed diam nonummy nibh euismod</Typography>
                      </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default VideoContent;