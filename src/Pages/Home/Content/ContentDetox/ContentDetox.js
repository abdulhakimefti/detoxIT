import { Container } from '@mui/material';
import React from 'react';
import backgroundImage1 from '../../../../Media/background1.png'
import './ContentDetox.css'

const ContentDetox = () => {
    return (
        <div className='contentDetoxbg' style={{backgroundImage:`url(${backgroundImage1})`,backgroundSize:'cover',width:"100%"}}>
           <Container>
            
           </Container>
        </div>
    );
};

export default ContentDetox;