import React from 'react'
import './Hero.css'
import dark_arrow from'../../assets/images/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
           <h1>
            We ensure better education for students
           </h1>
           <p>
            Our mission is to create a world where every student has access to quality education. We believe in the power of technology to transform lives and empower individuals.
           </p>
           <button className='btn'>
            Learn More
           <img src={dark_arrow} alt=''/>
           </button>
        </div>
    </div>
  )
}

export default Hero