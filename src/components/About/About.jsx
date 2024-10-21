import React from 'react'
import './About.css'
import about_img from '../../assets/images/about.png'
import play_icon from '../../assets/images/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
    <div className='about-left'>
    <img className='about-img' src={about_img} alt='about img'/>
    <img className='play-icon' src={play_icon} alt='play icon'
      onClick={()=>{setPlayState(true)}}
    />
    </div>
    <div className='about-right'>
       <h3>About University</h3>
       <h2>
        Nurturing Tomorrow's Leaders Today 
       </h2>
       <p>We are dedicated to fostering academic excellence and innovation in a supportive environment.</p>

<p>Our diverse programs empower students to become global leaders and problem solvers.</p>

<p>At our university, we prioritize personal growth alongside rigorous academic achievement.</p>



    </div>
    </div>
  )
}

export default About