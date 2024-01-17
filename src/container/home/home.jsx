import React, { Component, Fragment } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import {BrowserRouter, Link, Route, Routes, link } from 'react-router-dom';
import "./home.css"
import BlogPost from "../pages/BlogPost/BlogPost";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import YoutubeCompPage from "../pages/YoutubeComp/YoutubeComp";


class Home extends Component{
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }
   render(){
        return(
            <BrowserRouter>
                {/* <div>
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
                    <p>Counter</p>
                    <hr />
                    <Product/>
                    <p>LifeCycle Component</p>
                    <hr />
                    {
                        this.state.showComponent ? 
                        <LifeCycleComp />
                        : null
                    }
                    <p>Blog Post</p>
                    <hr />
                    <BlogPost/>
                </div> */}
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                        <Link to="/youtubecomp">Youtuber Component</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<BlogPost />}/>
                        <Route path="/product" element={<Product />}/>
                        <Route path="/lifecycle" element={<LifeCycleComp />}/>
                        <Route path="/youtubecomp" element={<YoutubeCompPage />}/>
                    </Routes>
                </Fragment>
            </BrowserRouter>
                )
            }
        }

export default Home;