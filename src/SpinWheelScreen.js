import React from "react";
import './App.css';
import wheelwithoffers from './wheelwithoffers.png'
import pointer from './pointer.png'
import { motion } from "framer-motion";

var obj;
let arr;
let random;
let randomCouponName;
let fullCouponName;

class spinWheel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            finalRotate: 0
        }
    }

    // Generates random coupon code
    randomGenerator = () => {
        arr = ['XX7B&','DF9JI','JH8LK','YU3RE','OP6FD','1SXRT']
        obj = {0:'30% sitewide off' , 1:'Buy 1 Get 1 free' , 2:'Free coffee mug on purchase worth 1000+', 3:'Buy 2 effervescent tablets & get 1 free', 4:'Free 50g tea on purchase of Rs.500', 5:'Hot chocolate free with tea'}
        let objKeys = Object.keys(obj);
        random = Math.floor(Math.random() * objKeys.length);
        randomCouponName = Math.floor(Math.random() * arr.length);
        fullCouponName = arr[randomCouponName] + random;

        this.setState({finalRotate: 1800 - random * 60})
        setTimeout(() => 
            {
                this.props.changeKey(fullCouponName);
                this.props.changeGameMode('DisplayCouponScreen');
                this.props.changeCoupon( obj[random]);
            }, 
            11000)
    }


    
    
    render() {
        return ( 
            <div id='main-div-2'>
                <div id='spinning-wheel-component'>
                    <div id='wheel-div'>
                    <motion.div id='motion-div' 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: this.state.finalRotate }}
                        transition={{ duration: 10 }}>
                            <img id='rotating-wheel' src={wheelwithoffers} alt={"wheelwithoffers"}></img>
                    </motion.div>
                        <img id='pointer' src={pointer} alt={'pointer'}></img>
                    </div>
                    <button id='spin-button' onClick={this.randomGenerator}>SPIN</button>
                </div>  
            </div>
        )
    }
}

export default spinWheel;