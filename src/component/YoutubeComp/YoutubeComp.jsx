import React from "react";
import "./YoutubeComp.css";

const YoutubeComp = (props) =>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/5kHyviqjhCk/mqdefault.jpg" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps ={
    time:'00.00',
    title:'title here',
    desc: 'xxx ditonton, xx hari yang lalu'
}

export default YoutubeComp;