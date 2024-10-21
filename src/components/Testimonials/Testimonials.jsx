import React, { useRef } from 'react'
import './Testimonials.css';
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'
function Testimonials() {
    const slider= useRef()
    let tx=0;
const slideForward=() => {
if(tx >-50){
    tx-=25
}
slider.current.style.transform=`translatex(${tx}%)`
}

const slideBackward=() => {
    if(tx <0){
        tx+=25
    }
    slider.current.style.transform=`translatex(${tx}%)`
}

  return (
    <div className='testimonials'>
   <img src={next_icon} alt='next-icon' className='next-btn' onClick={slideForward}/>
   <img src={back_icon} alt='back-icon' className='back-btn' onClick={slideBackward}/>
  <div className='slider'>
   <ul ref={slider}>
    <li>
        <div className='slide'>
         <div className='user-info'>
          <img src={user_1} alt='user-1'/>
          <div>
            <h3>Sophia Rivera</h3>
            <span>Eduverse,Spain</span>
          </div>
         </div>
         <p>
         <p>
         A passionate data science student, Sophia shares her journey to inspire others breaking into tech.
</p>

         </p>
        </div>
    </li>
    <li>
        <div className='slide'>
         <div className='user-info'>
          <img src={user_2} alt='user-2'/>
          <div>
            <h3>Ethan Carter</h3>
            <span>Eduverse,USA</span>
          </div>
         </div>
         <p>
         <p>
         An experienced educator, Ethan excels at making learning engaging and accessible through innovative teaching methods.
</p>

         </p>
        </div>
    </li>
    <li>
        <div className='slide'>
         <div className='user-info'>
          <img src={user_3} alt='user-3'/>
          <div>
            <h3>Lily Chen</h3>
            <span>Eduverse,Canada</span>
          </div>
         </div>
         <p>
         <p>
         An environmental science major, Lily is dedicated to promoting sustainability and inspiring action for a greener future.
</p>

         </p>
        </div>
    </li>
    <li>
        <div className='slide'>
         <div className='user-info'>
          <img src={user_4} alt='user-4'/>
          <div>
            <h3>Noah Bennett</h3>
            <span>Eduverse,UK</span>
          </div>
         </div>
         <p>
         <p>
  Hear what our students and educators have to say about their journey with Eduverse. Real stories, real experiences.
</p>

         </p>
        </div>
    </li>
   </ul>
  </div>
   
    </div>
  )
}

export default Testimonials