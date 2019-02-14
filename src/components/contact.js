import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-heading">
        <h2 style={{'margin': 0}}>KONTAKT</h2>
      </div>
      <div className="contact-container">
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" action="" method="post" className="contact-form">
        <input type="hidden" name="bot-field" />
          <input type="text" name="name" placeholder="Ime" />
          <input type="email" name="email" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="8"></textarea>
            <button className="contact-button">Send</button>
        </form>
      </div>
  </section>
  )
}
