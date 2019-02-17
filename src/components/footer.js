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
          <a href="https://www.facebook.com/KoMa-Sony-PS4-Kraljevo-2062130713863246"><img src={facebook} alt="instagram-icon" /></a>
          <a href="https://www.instagram.com/komakraljevo"><img src={instagram} alt="facebook-icon" /></a>
      </div>
    </div>
    </footer>
  )
}
