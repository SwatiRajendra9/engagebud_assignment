
import React from 'react';
import './App.css';
import spinwheel from './spinwheel.png'
import emailIcon from './emailicon.png'
import phoneIcon from './phoneicon.png'


class initialInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      phone: ""
    }
  }

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

  apiCallAndMoveToNextScreen = () => {
    if (!this.emailRegex.test(this.state.email)) {
      alert("Email not valid")
      return
    }   
    if (!this.phoneRegex.test(this.state.phone)) {
      alert("Phone number not valid")
      return
    }
    // const user = { email: 'swati@example.com', name: 'Swati' };
    // const headers = { 
    //     'Authorization': 'Bearer my-token',
    // };
    // axios.post('https://test.com/api/user', user, { headers })
    //     .then({
    //       //move to the next page
    // });
    this.props.changeGameMode('SpinWheelScreen')
  }

  handleOnChangeEmail = (emailInput) => {
    console.log(emailInput)
    this.setState({email: emailInput})
  }

  handleOnChangePhone = (phoneInput) => {
    this.setState({phone: phoneInput})
  }
    

  render() {
    return (
      <div id='main'>
        <div id='spin-div'>
          <img id='spinwheel' src={spinwheel} alt={"wheel"}/> 
        </div>
        <div id='input-div'>
          <p id='heading'>This is how EngageBud<br></br>looks like in action!</p>

          <div id='email-outer-box'>
            <div id='email-icon'>
              <img src={emailIcon} alt={'emailIcon'} id='email-icon-img'></img>
            </div>
            <div id='email-id-div'>
              <p id='email-text'>Email</p>
              <input type='text' id='input-email' value={ this.state.email } placeholder='joe@gmail.com' onChange={ e => this.handleOnChangeEmail(e.target.value) } ></input>
            </div>
          </div>

          <div id='phone-outer-box'>
            <div id='phone-icon'>
              <img src={phoneIcon} alt={'phoneIcon'} id='phone-icon-img'></img>
            </div>
            <div id='phone-id-div'>
              <p id='phone-text'>Phone number</p>
              <input type='text' id='input-phone' value={ this.state.phone } placeholder='98256XXXXX' onChange={ e => this.handleOnChangePhone(e.target.value)}></input>
            </div>
          </div>

            <div id='I-agree'>
              <div id='rect'></div>
              <div id='para'>I agree to receiving recurring automated messages at the number I have provided.<br></br> Consent is not a condition to purchase.</div>
            </div>
          <button id='try-luck' onClick={this.apiCallAndMoveToNextScreen}>Try your luck</button>
          <div id='terms'>
            <p id='term-1'>*You can spin the wheel only once!</p>
            <p id='term-2'>*If you win, you can claim your coupon for 10 minutes only!</p>
          </div>
            <div id='deny-getting-lucky'>
              <p id='not-lucky'>No, I don’t feel lucky</p>
              <button id='close'>X</button>
            </div>
        </div>
      </div>
    )
  }
}

export default initialInfo;