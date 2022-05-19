import React, { useRef, useState } from 'react'
import { auth } from './firebase'
import './SignIn.css'

function SignIn() {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value)
            .then((authUser) => 
                console.log(authUser)
            ).catch((error) => 
                alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => 
        console.log(authUser)
        ).catch((error) => alert(error.message))
    }


  return (
    <div >
        
        <div className='sign-in-container'>
            <h2>Sign In</h2>
            <form>
                <div className='form-contents'>
                    <input ref={emailRef} type='email' placeholder='Email or Phone number'/>
                    <input ref={passwordRef} type='password' placeholder='Password'/>
                    <button onClick={signIn}>Sign In</button>
                </div>

                <span className='span-grey'>New to Netflix? </span>
                <span className='span-link' onClick={register}>Register Now</span>
                
            </form>
        </div>

    </div>
  )
}

export default SignIn