import React from 'react'
import './hero-image.css'
import Logo from './logo-image'
export default function heroImage() {
  return (
    <div className="hero-image">
        <div style={logoStyle}>
          <Logo />
        </div>

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">KoMa KRALJEVO</span>
            <span className="heading-primary-sub">Iznamljivanje sony konzola</span>
          </h1>
          <span className="heading-primary-price">064/13-080-87 i 069/322-98-44</span>
          <a href="#contact" className="btn btn-white btn-animated">Kontaktirajte nas</a>
        </div>
    </div>
  )
}

const logoStyle = {
  'paddingLeft': '1.5rem',
  'paddingTop': '1.5rem',
  'maxWidth': '12rem',
}