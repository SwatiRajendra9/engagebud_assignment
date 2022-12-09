import React from 'react';
import './App.css';
import spinwheel from './spinwheel.png'
import emailicon from './emailicon.png'
import phoneicon from './phoneicon.png'

import spinWheel from './Screen2';



class initialInfo extends React.Component {
  constructor(props){
    super(props);
  }
    

  render() {
    return (
      <div id='main'>
        <div id='spindiv'>
          <img id='spinwheel' src={spinwheel} alt={"wheel"}/> 
        </div>
        <div id='inputdiv'>
          <h1>This is how Engagebud<br></br>looks like in action!</h1>

          <div id='emailouterbox'>
            <div id='emailicon'>
              <img src={emailicon} alt={'emailicon'} id='emailiconimg'></img>
            </div>
            <div id='emailiddiv'>
              <p id='emailtext'>Email</p>
              <input type='text' id='inputemail' placeholder='joe@gmail.com'></input>
            </div>
          </div>

          <div id='phoneouterbox'>
            <div id='phoneicon'>
              <img src={phoneicon} alt={'phoneicon'} id='phoneiconimg'></img>
            </div>
            <div id='phoneiddiv'>
              <p id='phonetext'>Phone number</p>
              <input type='text' id='inputphone' placeholder='+91 98256 XXXXX'></input>
            </div>
          </div>

            <div id='Iagree'>
              <div id='rect'></div>
              <div id='para'>I agree to receiving recurring automated messages at the number I have provided.<br></br> Consent is not a condition to purchase.</div>
            </div>
          <button id='tryluck' onClick={()=> {this.props.changeGameMode('Screen2')}}>Try your luck</button>
          <div id='terms'>
            <p id='term1'>*You can spin the wheel only once!</p>
            <p id='term2'>*If you win, you can claim your coupon for 10 minutes only!</p>
          </div>
            <div id='deny'>
              <p id='notlucky'>No, I don’t feel lucky</p>
              <button id='close'>X</button>
            </div>
        </div>
      </div>
    )
  }
}

export default initialInfo;
