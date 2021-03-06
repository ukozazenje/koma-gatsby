import React from "react"

import Layout from "../components/layout"
import HeroImage from "../components/hero-image"
import PriceHeading from "../components/price-heading"
import PriceBox from '../components/price-box'
import Contact from '../components/contact'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="KoMa - Kraljevo" keywords={[`Koma`, `sony 4`, `Kraljevo`]} />
    <HeroImage />
    <PriceHeading />
    <PriceBox />
    <Contact />
  </Layout>
)

export default IndexPage
