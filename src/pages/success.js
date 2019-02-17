import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/success.css'

const Success = () => (
  <div className="success-page">
    <SEO title="Success page" />
    <div className="success-message">
      <h1>Uspesno ste popunili formu</h1>
      <p>Uskoro ce Vas kontaktirati neko od zaposlenih</p>
      <Link to="/" className="back-btn">Pocetna</Link>
    </div>
  </div>
)

export default Success