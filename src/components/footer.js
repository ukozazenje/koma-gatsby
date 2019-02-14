import React from 'react'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import './footer.css'

export default function footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="copyright">
          © {new Date().getFullYear()}, Koma
      </div>
        <div className="social-icons">
          <img src={facebook} alt="instagram-icon" />
          <img src={instagram} alt="facebook-icon" />
      </div>
    </div>
    </footer>
  )
}
