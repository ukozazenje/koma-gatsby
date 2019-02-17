import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Success page" />
    <h1>Hvala. Uspesno ste popunili formu.</h1>
    <p>Uskoro ce Vas kontaktirati neko od zaposleni.</p>
    <Link to="/">Povratak na pocetnu stranu</Link>
  </Layout>
)

export default Success