import React,{useRef} from 'react'
import {Container} from 'react-bootstrap';
import emailjs from '@emailjs/browser'


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_loboca6', 'template_5gfrexh', form.current, {
          publicKey: 'xobeOPzPPhq5Job96',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (

    <section className='contact' id="connect">
        <Container className="contact-bx">
            <h2 className='foot-head'> Let's Connect</h2>
        <form ref={form} onSubmit={sendEmail}>
            <label className='label'>Name <span className='star'>*</span></label>
                <input type="text" className='input' name="user_name" placeholder='Name'/>
                    <label  className='label'>Email <span className='star'>*</span></label>
                        <input type="email" className='input' name="user_email" placeholder='Email Id' />
                            <label  className='label'>Message <span className='star'>*</span></label>
                         <textarea name="message" className='textarea' placeholder='Message'/>
                    <input type="submit" value="Send" className='btn3'/>
        </form>
        </Container>
    </section>
  )
}

export default Contact