import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow  from '../../assets/white-arrow.png'

function Contact() {

    const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "9e8729ef-781c-4b3a-a665-1926a00582e6");

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
}
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>  Ullam neque quidem corporis repellendus libero earum error <br></br>  quam omnis eius sit magni odio cupiditate sunt.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Sample@email.com</li>
            <li><img src={phone_icon} alt="" />+63 9054 1234 123</li>
            <li><img src={location_icon} alt="" />312 Tandang Sora Balara, Quezon City 1664</li>
        </ul>
        </div>
        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
        
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                
                <label htmlFor="">Write your messages here</label>
                <textarea name="message" id="" rows="6" placeholder='Enter your Message' required>
                </textarea>
                <button className='btn dark-btn' type='submit'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact