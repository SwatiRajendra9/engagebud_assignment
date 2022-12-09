import React from 'react';
import './App.css';
import spinwheel from './spinwheel.png'
import Screen1 from './Screen1.js'
import Screen2 from './Screen2.js'
import Screen3 from './Screen3.js'
import Screen4 from './Screen4.js'

var obj;
let random;

class mainComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {'gameMode': 'Screen1', 'couponstring' : 'None', 'couponkey' : 'value'}
  }

  //function here pass props down
  changeGameMode = (screen) => {
    this.setState({gameMode : screen});
  }


  changeCoupon = (coupon) => {
    this.setState({couponstring : coupon});
  }

  changeKey = (key) => {
    this.setState({couponkey : key})
  }



  render() {
    
    if(this.state.gameMode === 'Screen1') {
    return (
      <Screen1 changeGameMode={this.changeGameMode}  />
    )
    }
    else if(this.state.gameMode === 'Screen2') {
      return (
        <Screen2 changeGameMode={this.changeGameMode}  changeCoupon = {this.changeCoupon} changeKey = {this.changeKey}/>
      )
    }
    else if(this.state.gameMode === 'Screen3') {
      return (
        <Screen3 changeGameMode={this.changeGameMode} a={this.state.couponstring} b={this.state.couponkey}/>
      )
    }
      
}
  
    
  

}

export default mainComponent;
