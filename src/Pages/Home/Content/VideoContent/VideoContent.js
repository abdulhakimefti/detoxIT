import React from 'react';
import videoContentBg from '../../../../Media/videoContent.png';
import videoImage from '../../../../Media/video.png';
import { Grid, Typography } from '@mui/material';
import './VideoContent.css'

const VideoContent = () => {
    return (
        <div style={{zIndex:'1100'}}>
            <div className='videoContnetBg' style={{backgroundImage:`url(${videoContentBg})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',width:'100%',}}>

                <Grid container>
                    <Grid item sm={6} xs={6} md={6}>
                        <div className='imagedivVC' style={{display:'flex',justifyContent:'center' ,}} >
                            <img className='imageVC'  src={videoImage} />
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={6} md={6} >
                      <div className='review' >
                          <p className='customers' style={{color:'red',fontWeight:'700'}}>CUSTOMERS</p>
                          <h1 className='headingVC' style={{fontWeight:'600',color:'#556270'}}>
                          We turn our clients into business partners, its why people use us 

                          </h1>
                          <p className='paraVC' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad  sed diam nonummy nibh euismod</p>
                      </div>
                    </Grid>
                </Grid>
                <div className="responsiveReview" style={{marginTop:"-20px"}}>
                <p className='paraVCd' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad  sed diam nonummy nibh euismod</p>
                </div>
            </div>
        </div>
    );
};

export default VideoContent;