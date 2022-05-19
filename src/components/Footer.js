import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaMailBulk, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-title'>
            <p>Questions? Contact Us</p>
            <FaFacebook style={{marginRight: 10+'px', cursor:'pointer'}}/><FaInstagram style={{marginRight: 10+'px', cursor:'pointer'}}/><FaMailBulk style={{marginRight: 10+'px', cursor:'pointer'}}/><FaTwitter style={{marginRight: 10+'px', cursor:'pointer'}}/>
        </div>
        <div className='footer-flex'>
            <div className='div1'>
                <p>FAQ</p>
                <p>Investor Relations</p>
                <p>Ways To Watch</p>
                <p>Corporate Information</p>
            </div>
            <div className='div2'>
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Terms Of Use</p>
                <p>Contact Us</p>
            </div>
            <div className='div3'>
                <p>Account</p>
                <p>Redeem Gift Card</p>
                <p>Privacy</p>
                <p>Speed Test</p>
            </div>
            <div className='div4'>
                <p>Media Center</p>
                <p>Buy Gift Card</p>
                <p>Cookie Settings</p>
                <p>Legal Notices</p>
            </div>
        </div>
        <p className='dev-by'>Developed by Adarsh Tiwari</p>
        
    </div>
  )
}

export default Footer