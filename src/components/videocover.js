import React from 'react';

import classes from './videocover.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://vod-progressive.akamaized.net/exp=1594195955~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4438%2F14%2F372190670%2F1546304979.mp4~hmac=be0cc05a2832eaa429a1cb53ca2210ab25e878e1816ff271b050218991636af1/vimeo-prod-skyfire-std-us/01/4438/14/372190670/1546304979.mp4?download=1&filename=video.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                
            </div>
        </div>
    )
}

export default BackgroundVideo