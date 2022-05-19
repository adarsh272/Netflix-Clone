import React, { useState } from 'react'
import './Login.css'
import SignIn from './SignIn'

function Login() {

  const [signIn, setSignIn] = useState(false)
  
  const onSignInClick = () => {
    setSignIn(true)
  }

  return (
    <div className='login'>
        <div className='login-header'>
            <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' className='logoo'></img>
            <button className='btn-signin' onClick={onSignInClick}>Sign In</button>
        </div>
        <div className='login-gradient'>
            {signIn ? (<SignIn />) : (<div className='login-body'>
                <h1>Unlimited movies, TV Programmes and more.</h1>
                <p>Watch anywhere. Cancel anytime</p>
                <form>
                  <p>Ready to watch? Enter your email to create or restart your membership</p>
                  <div className='form-content'>
                    <input type='email' className='input' placeholder='Email Address'/>
                    <button className='btn-start' onClick={onSignInClick}>Get Started</button>
                  </div>
                
                </form>
          </div>)}
          
        </div>
        
    </div>
  )
}

export default Login