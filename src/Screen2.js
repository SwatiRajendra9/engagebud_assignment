import React from "react";
import './App.css';
import screen2wheel from './screen2wheel.png'
import pointer from './pointer.png'

var obj;
let arr;
let random;
let randomcoupon;
let fullcoupon;

class spinWheel extends React.Component {
    constructor(props){
        super(props);
        
    }

    spinning = () => {
        arr = ['XX7B&','DF9JI','JH8LK','YU3RE','OP6FD','1SXRT']
        obj = {0:'30% sitewide off' , 1:'Buy 1 Get 1 free' , 2:'Free coffee mug on purchase worth 1000+', 3:'Buy 2 effervescent tablets & get 1 free', 4:'Free 50g tea on purchase of Rs.500', 5:'Hot chocolate free with tea'}
        let a = Object.keys(obj);
        random = Math.floor(Math.random() * a.length);
        randomcoupon = Math.floor(Math.random() * arr.length);
        fullcoupon = arr[randomcoupon] + random;
        this.props.changeKey(fullcoupon);
        this.props.changeGameMode('Screen3');
        this.props.changeCoupon(obj[random]);
        
        
    }


    
    
    render() {
        return (
            
            <div id='maindiv2'>
                <div id='wholecomponent'>
                    <div id='wheeldiv'>
                        <img id='rotatingwheel' src={screen2wheel} alt={"screen2wheel"}></img>
                        <img id='pointer' src={pointer} alt={'pointer'}></img>
                    </div>
                    <button id='spinbutton' onClick={this.spinning}>SPIN</button>
                </div>  
            </div>
        )
    }
}

export default spinWheel;