import React, { Component, Fragment } from "react";
import "./LifeCycleComp.css"

class LifeCycleComp extends Component{
    constructor (props){
        super(props);
        this.state = {
            count: 1
        }
        console.log('contructor')
    }

    static getDrivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount (){
        console.log('componetDidMount')
        // setTimeout(()=>{
        //     this.setState({
        //         count: 2
        //     })
        // },5000)
    }

    shouldComponentUpdate (nextProps, nextState){
        console.group('getComponentUpdate')
        // console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('this state', this.state);
        console.groupEnd();
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeCount=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('render');
        return(
            <Fragment>
                 <p>LifeCycle</p>
                    <hr />
                    <button className="btn" onClick={this.changeCount}>Coponent Button {this.state.count}</button>
            </Fragment>
        )
    }
}

export default LifeCycleComp;