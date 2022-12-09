import React from "react";
import './App.css';
import spinwheel3 from './spinwheel.png'


class collectCoupon extends React.Component {
    constructor(props){
        super(props);
    }

    copyAndClose = () => {
        navigator.clipboard.writeText(this.props.b);
        this.props.changeGameMode('LogInScreen')
    }

    render() {
        
        return (
            <div id='maindiv3'>
                <div id='spindiv3'>
                    <img id='spinwheel3' src={spinwheel3} alt={"wheel"}/> 
                </div>
                <div id='coupondiv'>
                    <div id='description'>
                        <p id='congrats'>Congrats! You Won:</p>
                        <h1 id='offer'>{this.props.a}</h1>
                    </div>
                    <div id='code'>
                        <div id='couponcode'>{this.props.b}</div>
                        <button id='copy' onClick={() =>  navigator.clipboard.writeText(this.props.b)}>COPY</button>
                    </div>
                    <button id='copyclose' onClick={this.copyAndClose}>Close Panel & Copy </button>
                    <p id='anotherterm'>*You can claim your coupon for 10 minutes only!</p>
                </div>
            </div>
        )
    }

}

export default collectCoupon;