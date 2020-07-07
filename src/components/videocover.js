import React from 'react';

import classes from '../components/videocover.module.css';

const videocover = () => {
    const movie = "https://vod-progressive.akamaized.net/exp=1594123050~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4438%2F14%2F372190670%2F1546304979.mp4~hmac=0afa45010efde8996f00695ccfa290bf413972049730bbd10f046aaabcd2ac9a/vimeo-prod-skyfire-std-us/01/4438/14/372190670/1546304979.mp4?download=1&filename=video.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={movie} type="video/mp4" />
                <source src={movie} type="video/ogg" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                   
                   
                   
                </div>
          
        </div>
        </div>
        
    )
}

export default videocover