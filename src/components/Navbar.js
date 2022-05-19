import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const [navTransition, setnavTransition] = useState(false)
    const navigate = useNavigate()


    const navColorTransition = () => {
        if(window.scrollY > 100){
            setnavTransition(true)
        }
        else{
            setnavTransition(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navColorTransition);
      }, []);

  return (
      
    <div className={`nav ${navTransition && 'nav-black'}`}>
        <div className='nav-contents'>
            <img onClick={() => navigate('/')} src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' className='logo'></img>
            <img onClick={() => navigate('/profile')} src='https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg' className='user-logo'></img>
        </div>
     
    </div>
  )
}

export default Navbar
