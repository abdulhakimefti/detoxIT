import React from 'react';
import loadingLogo from '../../../Media/apple-icon-144x144.png'
import './LoadingIcon.css'

const LoadingIcon = () => {
    return (
        <div>
            <div className='loadingPageHeight'>
                <img className='loadingPageImage' src={loadingLogo}/>
            </div>
        </div>
    );
};

export default LoadingIcon;