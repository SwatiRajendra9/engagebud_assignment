import React from "react";
import './App.css';
import spinwheel3 from './spinwheel.png'


class collectCoupon extends React.Component {
    constructor(props){
        super(props);
    }

    //Copies coupon code to the clipboard, redirects to LogInScreen
    copyAndClose = () => {
        navigator.clipboard.writeText(this.props.b);
        this.props.changeGameMode('LogInScreen')
    }

    render() {
        return (
            <div id='main-div-3'>
                <div id='spin-div-3'>
                    <img id='spin-wheel-3' src={spinwheel3} alt={"wheel"}/> 
                </div>
                <div id='coupon-div'>
                    <div id='offer-description'>
                        <p id='congrats'>Congrats! You Won:</p>
                        <h1 id='offer'>{this.props.a}</h1>
                    </div>
                    <div id='coupon-code-div'>
                        <div id='coupon-code'>{this.props.b}</div>
                        <button id='copy' onClick={() =>  navigator.clipboard.writeText(this.props.b)}>COPY</button>
                    </div>
                    <button id='copy-close' onClick={this.copyAndClose}>Close Panel & Copy </button>
                    <p id='another-term'>*You can claim your coupon for 10 minutes only!</p>
                </div>
            </div>
        )
    }
}

export default collectCoupon;