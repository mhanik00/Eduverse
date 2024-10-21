import React from 'react'
import './Programs.css'
import Programs_1 from '../../assets/images/program-1.png'
import Programs_2 from '../../assets/images/program-2.png'
import Programs_3 from '../../assets/images/program-3.png'
import Programs_icon_1 from '../../assets/images/program-icon-1.png'
import Programs_icon_2 from '../../assets/images/program-icon-2.png'
import Programs_icon_3 from '../../assets/images/program-icon-3.png'
function Programs() {
  return (
    <div className='programs'>
      <div className='program'>
       <img src={Programs_1} alt='program-1'/>
       <div className='caption'>
        <img src={Programs_icon_1} alt='Programs_icon_1'/>
        <p>Graduation Degree</p>
       </div>
      </div>
      <div className='program'>
       <img src={Programs_2} alt='program-2'/>
       <div className='caption'>
        <img src={Programs_icon_2} alt='Programs_icon_2'/>
        <p>Master Degree</p>
       </div>
      </div>
      <div className='program'>
       <img src={Programs_3} alt='program-3'/>
       <div className='caption'>
        <img src={Programs_icon_3} alt='Programs_icon_3'/>
        <p>Post Graduation</p>
       </div>
      </div>
    </div>
  )
}

export default Programs