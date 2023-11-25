import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import useTranslations from "../useTranslations"
import * as styles from "./_Product.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

const Product = () => {

    const { 
        StealthStride,
        ArcticAura,
        CityPulse,
        CloudWalker
        } = useTranslations()

    const data = useStaticQuery(graphql`
    query getAllProducts {
  allStripePrice(filter: {product: {metadata: {category: {eq: "sneakers"}}}}) {
    nodes {
      product {
        id
        images
        metadata {
          color
          name
          price
        }
        default_price
        name
      }
      unit_amount
      nickname
    }
  }
}
    `)

    const sizesRange = []
    const allProducts = data.allStripePrice.nodes
    //const photosSlider = data.allFile.nodes
    const uniqueProducts = allProducts.filter((product, i, self) => {
      return i === self.findIndex((t) => {
        return t.product.id === product.product.id && t.product.id === product.product.id
      })
    })
    //const uniqueColors = Array.from(new Set(allProducts.map(({product}) => product.metadata.color)))
    const defaultImage = data.allStripePrice.nodes[0].product.images
    const defaultModel = data.allStripePrice.nodes[0].product.name

/*     products.forEach((prod) => {
        console.log(prod)
    }) */

    const [ image, setImaage ] = useState(defaultImage)
    const [ model, setModel ] = useState(defaultModel)
    const [ currentDescription, setCurrentDescription ] = useState(ArcticAura)

    //console.log(products)
    console.log(uniqueProducts)

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>About Product</h2>
                <div className={styles.productInfoBlock}>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{defaultModel}</h3>
                        <p>{currentDescription}</p>
                    </div>
                    <div className={styles.productImage}>
                        <img src={image} alt="sneakers"></img>
                    </div>
                </div>
                <div className={styles.photosSlider}>
                    {uniqueProducts.map(product => {
                        return (
                            <button key={product.product.id} id={product.product.name}>
                              <img src={product.product.images} alt="sneakers"></img>
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}

export default Product