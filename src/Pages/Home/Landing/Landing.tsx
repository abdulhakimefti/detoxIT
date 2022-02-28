import { Typography } from '@mui/material';
import React from 'react';
import illustration from '../../../Media/illustrations.png'

const Landing = () => {
    return (
        <div style={{marginTop:'65px'}}>
       <div style={{backgroundColor:'#00706E',height:'300px'}}></div>
       <div style={{backgroundColor:'#556270',height:'300px'}}></div>
       <div style={{display:'flex',margin:'-525px 5% 0'}}>
           <div style={{width:'50%'}}>
                <img style={{width:'80%'}} src={illustration}/>
           </div>
           <div style={{width:'50%',color:'#fff'}}>
                <div>
                    <Typography style={{fontSize:'60px',fontWeight:'700'}}>It’s never too late to learn!</Typography>
                </div>
                <div style={{margin:'120px 0 0 0',width:"70%"}}>
                    <Typography style={{fontSize:'20px',fontWeight:'500'}}>The smart way to manage lorem ipsum dolor sit amet consectetuer adipiscing
</Typography>
<Typography style={{margin:'50px 0 0 0',fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit </Typography>
                </div>
           </div>
       </div>
        </div>
    );
};

export default Landing;