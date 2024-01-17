import React, { Component, Fragment } from "react";
import "./Product.css"
import CardProduct from "../../CardProduct/CardProduct";

class Product extends Component{
    state = {
        order : 4
    }

    handleCounterChange = (newValue)=>{
        this.setState({
            order: newValue
        })
    }
    render(){
        return(
           <Fragment>
             <p>Product</p>
                    <hr />
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://cdn-icons-png.flaticon.com/512/3770/3770807.png" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange = {(value)=> this.handleCounterChange(value)}/>
           </Fragment>
        );
    }
}

export default Product;