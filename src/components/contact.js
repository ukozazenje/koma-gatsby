import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <h2 style={{'margin': 0}}>KONTAKT</h2>
      </div>
      <div className="contact-container">
        <form action="/success" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <p>
            <input type="text" name="name" placeholder="Ime" />
          </p>
          <p>
            <input type="email" name="email" placeholder="Email" />
          </p>
          <p>
            <textarea name="message" cols="30" rows="8"></textarea>
          </p>
          <input value="Send" className="contact-button" type="submit" />
        </form>
      </div>
  </section>
  )
}
