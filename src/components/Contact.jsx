import React, {useRef} from "react";
import '../App.css';
import emailjs from "emailjs-com";
// import emailjs from '@emailjs/browser';

function Contact(e) {


  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm('gmail', 'template_SwMug9cd', form.current, 'user_5lxV03KgTBhjn6GqMPWgM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.preventDefault();
      alert("Email Sent!")
      e.target.reset();
   };
   

  return (
    <div className="Contact-wrapper section4">
      <div className="contact-bg-wrapper">
        <div className="contact-content">
          <h1 className="contact-h1 font-type fade-in-text">Contact Me</h1>
            <form ref={form} onSubmit={ sendEmail }>
              <input type="text" id="contact-name" name="name" placeholder="Name"/>
              <input type="text" id="contact-email" name="email" placeholder="Email"/>
              <input type="text" id="contact-subject" name="subject" placeholder="Subject"/>
              <textarea id="contact-message" name="message_html" placeholder="Write something.."></textarea>
              <button type="submit" value="Submit" className="contact-button">Send</button>
            </form> 
          </div>
        </div>
    </div>
  );
}

export default Contact;
