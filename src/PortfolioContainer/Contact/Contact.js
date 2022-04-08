import React, {useRef} from "react";
import "./Contact.css";
import{ AiOutlineMail } from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { BsGithub } from 'react-icons/bs'




const Contact = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sv96myf', 'template_0zaksma', form.current, '_38GfY32Yd3gEjY7b')

      e.target.reset()
    };

  return (
    <section id="contact" >
      <h5 className="contact-title">Get in Touch</h5>

      <div className="container contact_container">
        <div className="contact_options>">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>ms.Maina001@gmail.com</h5>
            <a href="mailto:ms.Maina001@gmail.com" ><b>Click here to Mail me</b></a>
          </article>

          <article className="contact_option">
            <FaTwitter className="contact_option_icon"/>
            <h4>Twitter</h4>
            <h5>@Techsis4</h5>
            <a href="https://twitter.com/Techsis4"><b>Reach me on Twitter</b></a>
          </article>

          <article className="contact_option">
            <BsGithub className="contact_option_icon" />
            <h4>To see my projects,</h4>
            <a href="https://github.com/mozonii"><b>Click here!</b></a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder="Your name" required/>
          <input type='email' name='email' placeholder="Your email" required />
          <textarea name="message" rows='7' placeholder="Your message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
