import React, { Component } from "react";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

class YoutubeCompPage extends Component{
    render(){
        return(
            <div>
                    <p>YouTube Component</p>
                    <hr />
                    <YoutubeComp 
                        time="7.12" 
                        title ="title 1"
                        desc ="10X ditonton, 2 hari yang lalu"/>
                    <YoutubeComp 
                        time="8.02" 
                        title ="title 2"
                        desc ="500X ditonton, 3 hari yang lalu"/>
                    <YoutubeComp 
                        time="5.04" 
                        title ="title 3"
                        desc ="1200X ditonton, 1 hari yang lalu"/>
                    <YoutubeComp 
                        time="10.02" 
                        title ="title 4"
                        desc ="120x ditonton, 4 hari yang lalu"/>
                    <YoutubeComp/>
            </div>
        )
    }
}

export default YoutubeCompPage;