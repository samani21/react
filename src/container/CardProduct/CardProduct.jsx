import React, { Component } from "react";

class CardProduct extends Component{
    state = {
        order : 4
    }

    handelCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }

    handlePlus = ()=>{
        this.setState({
            order : this.state.order + 1
        }, ()=>{
            this.handelCounterChange(this.state.order);
        })
    }
    handleMinus = ()=>{
        this.setState({
            order : this.state.order - 1
        }, ()=>{
            this.handelCounterChange(this.state.order);
        })
    }
    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://down-id.img.susercontent.com/file/214db5527119b89ccccafdb9e5b8c377" alt="" />
                    </div>
                    <p className="product-title">Daging ayam berbumbu Rasa Original plus Tepung Crispy[1 Carton - 10 Pack]</p>
                    <p className="product-price">Rp. 410.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;