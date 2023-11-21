import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../components/useTranslations"
import Seo from "../components/seo"
//import Zasilkovna from "../components/Zasilkovna/Zasilkovna"
//import Header from "../components/Header/Header"
import ProductOffer from "../components/ProductOffer/ProductOffer"
import * as styles from "./pages.module.scss"
import Gallery from "../components/Gallery/Gallery"
import HeaderSwiper from "../components/HeaderSwiper/HeaderSwiper"
import AboutProduct from "../components/AboutProduct/AboutProduct"



const IndexPage = () => {

  const {
    main_h1
  } = useTranslations()
  
  return (
    <>   
      <HeaderSwiper />
      <div className={styles.container}>
        <h1>{main_h1}</h1>
      </div>

      <AboutProduct />
      <ProductOffer />
      <Gallery />
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
