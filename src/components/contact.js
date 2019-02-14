import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-heading">
        <h2 style={{'margin': 0}}>KONTAKT</h2>
      </div>
      <div className="contact-container">
        {/* <form name="contact" method="post"  data-netlify="true" className="contact-form">
          <input type="text" name="name" placeholder="Ime" id="name" />
          <input type="text" name="email" placeholder="Email" id="email" />
          <textarea name="message" id="message" cols="30" rows="8"></textarea>
          <button className="contact-button" type="submit">Send</button>
        </form> */}
        <form name="contact" method="POST" data-netlify="true" className="contact-form">
          <p>
            <input type="text" name="name" placeholder="Ime" />
          </p>
          <p>
            <input type="email" name="email" placeholder="Email" />
          </p>
          <textarea name="message" cols="30" rows="8"></textarea>
          <button className="contact-button" type="submit">Send</button>
        </form>
      </div>
  </section>
  )
}
