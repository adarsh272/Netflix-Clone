import React from 'react'
import Navbar from './Navbar'
import './ProfileScreen.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { auth } from './firebase';
import PlansScreen from './PlansScreen';


function ProfileScreen() {

    const user = useSelector(selectUser);


  return (
    <div  className='profile-section'>
        <Navbar/>
        <div className='profile-area'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' className='user-img'></img>
            <div className='profile-details'>
                <div className='user-name'>{user.email}</div>
                <div className='plan-section'>
                    <PlansScreen />
                    <button onClick={() => auth.signOut()} className='sign-out'>Sign Out</button>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default ProfileScreen