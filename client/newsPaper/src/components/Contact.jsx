import React from 'react'
import '../css/contact.css'

const Contact = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src="" alt="" />
        </div>
        <div className="contact-section">
            <div className="centact-left">
                <h1>Let's talk</h1>
                <p>send your details for add as student to download all the reference books</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src="" alt="" /> <p>codecrushes@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src="" alt="" /> <p>0757332727</p>
                    </div>
                    <div className="contact-detail">
                        <img src="" alt="" /> <p>Rajarata University of Sri Lanka</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" id="" placeholder='Ender Your Name'/>
                <label htmlFor="">Your Stream</label>
                <input type="text" name="Stream" id="" placeholder='Ender Your Stream'/>
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" id="" placeholder='Ender Your Email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Ender Your Message'></textarea>
                <button type='submit'className='contact-submit'>Sumbit Now</button>
            </form>
        </div>
      </div>
  )
}

export default Contact