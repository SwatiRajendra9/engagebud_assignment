import React from 'react';
import './App.css';
import LogInScreen from './LogInScreen.js'
import SpinWheelScreen from './SpinWheelScreen.js'
import DisplayCouponScreen from './DisplayCouponScreen.js'


class mainComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {'gameMode': 'LogInScreen', 'couponstring' : 'None', 'couponkey' : 'value'}
  }

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
    
    if(this.state.gameMode === 'LogInScreen') {
    return (
      <LogInScreen changeGameMode={this.changeGameMode}  />
    )
    }
    else if(this.state.gameMode === 'SpinWheelScreen') {
      return (
        <SpinWheelScreen changeGameMode={this.changeGameMode}  changeCoupon = {this.changeCoupon} changeKey = {this.changeKey}/>
      )
    }
    else if(this.state.gameMode === 'DisplayCouponScreen') {
      return (
        <DisplayCouponScreen changeGameMode={this.changeGameMode} a={this.state.couponstring} b={this.state.couponkey}/>
      )
    } 
  }
}

export default mainComponent;
