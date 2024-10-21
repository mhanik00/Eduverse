import React from 'react'
import './Contact.css';
import msg_icon from'../../assets/images/msg-icon.png'
import mail_icon from'../../assets/images/mail-icon.png'
import phone_icon from'../../assets/images/phone-icon.png'
import location_icon from'../../assets/images/location-icon.png'
import white_arrow from'../../assets/images/white-arrow.png'
function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c2a97d83-412c-405f-a3f2-8a3df20c2e6d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
       <div className='contact-col'>
         <h3>
            Send Us a message <img src={msg_icon} alt='
            msg-icon'/>
         </h3>
         <p>
            We love to hear from you! Please fill out the form below.
            <ul>
                <li> 
                 <img src={mail_icon} alt='
                 mail-icon'/>
                    mhanik063@gmail.com
                </li>
                <li>
                 <img src={phone_icon} alt='
                 phone-icon'/>
                    +8801705139807
                </li>
                <li>
                 <img src={location_icon} alt='
                 location-icon'/>
                   Ullapara,Sirajgong <br/>
                   Rajshahi,Bangladesh
                </li>
            </ul>
         </p>
       </div>
       <div className='contact-col'>
           <from
           className='test-form' onSubmit={
            onSubmit}
           >
            <label>Your Name</label>
            <input type='text' placeholder='Enter Your Name' 
                required
                name='name'
            />
            <label>Phone Number</label>
            <input type='tel' placeholder='Enter Your Phone Number'
                required
                name='phone'
            />
            <label>Write your message Here</label>
            <textarea placeholder='Enter Your Message'
                required
                name='message'
                rows='5'
            />
            <button       
           type='submit'
           className='btn dark-btn' 
           >Submit Now
            <img
             src={white_arrow}
             alt='white-arrow'/>

            </button>
           
           </from>
           <span>
           {
            result
           }
           </span>
       </div>
    </div>
  )
}

export default Contact