import React from 'react'
import './../assets/css/Footer.css'
import {FaFacebook, FaTwitter, FaLinkedin,FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='item'>
            <h3>Products</h3>
            <hr/>

            <ul>
                <li><a href='/about'>Features</a></li>
                <li><a href='/about'>Login</a></li>
                <li></li>
            </ul>
        </div> 

        <div className='item'>
            <h3>Resources</h3>
            <hr/>
            <ul>
                <li><a href='/about'>Blog</a></li>
                <li><a href='/about'>Review</a></li>
            </ul>
        </div>

        <div className='item'>
            <h3>Why Us</h3>
            <hr/>
            <ul>
                <li><a href='/about'>About Us</a></li>
                <li><a href='/about'>Privacy</a></li>
                <li><a href='/about'>Terms + Condition</a></li>
            </ul>
        </div>

        <div className='item'>
            <h3>Follow Us</h3>
            <hr/>
            <ul className='social'>
                <li><a href='/about'><FaGithub  className='git'/></a></li>
                <li><a href='/about'><FaLinkedin  className='linkedin'/></a></li>
                <li><a href='/about'> <FaFacebook   className='facebook'/> </a>  </li>
                <li><a href='/about'><FaTwitter  className='twitter'/></a> </li>
                
            </ul>
        </div>

        
    </div>
  )
}

export default Footer