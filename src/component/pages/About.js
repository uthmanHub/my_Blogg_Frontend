import React, { useState } from 'react'
import './../assets/css/About.css'
import images from './../assets/images/images'
import getPhotoUrl from 'get-photo-url'

const About = () => {
  const [image, setImage] = useState(images[3])

  const updateImage = async () => {
    const photo = await getPhotoUrl("#profile")
    setImage(photo)
    console.log(image)
  }

  return (
    <div className='about'>
      <div className='about-profile'>
        <label htmlFor='profile'>
          <img src={image} alt='' className='about-img'></img>
        </label>
        <input id='profile' type='file' placeholder='edit' onClick={updateImage} style={{display: "none"}}/>
      </div>

      <div className='about-cred'>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Email'/>
        <input type='text' placeholder='Phone'/>
        <input type='text' placeholder='I donno'/>
      </div>
      
      <button className='about-btn'>Save</button>

    </div>
  )
}

export default About