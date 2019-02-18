import React from "react"
import SEO from "../components/seo"
import '../components/404.css'
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div className="not-found-page">
    <SEO title="404: Not found" />
    <div className="not-found-page-box">
      <h1>404</h1>
      <Link to="/" className="back-link">Povratak na pocetnu stranu</Link>
    </div>
  </div>
)

export default NotFoundPage
