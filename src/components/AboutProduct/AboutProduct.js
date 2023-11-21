import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./_AboutProduct.module.scss"

const AboutProduct = () => {

    const data = useStaticQuery(graphql`
        query getProducts {
            allStripePrice(filter: {product: {metadata: {category: {eq: "sneakers"}}}}) {
                nodes {
                    product {
                        id
                        images
                        metadata {
                            color
                            name
                            price
                            size
                        }
                        default_price
                    }
                }
            }
            stripePrice(
                product: {metadata: {name: {eq: "Arctic Aura"}, size: {eq: "38"}, color: {eq: "white"}}}
            ) {
                product {
                    images
                    metadata {
                        name
                      }
                }
            }
        }
    `)

    const products = data.allStripePrice.nodes
    //const uniqueImages = Array.from(new Set(products.map((obj) => obj.name)))
    const defaultImage = data.stripePrice.product.images
    const defaultModel = data.stripePrice.product.metadata.name

    const [ image, setImaage ] = useState(defaultImage)
    const [ model, setModel ] = useState(defaultModel)

    //console.log(uniqueImages)

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>About Product</h2>
                <div className={styles.productInfoBlock}>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{defaultModel}</h3>
                    </div>
                    <div className={styles.productImage}>
                        <img src={image} alt="sneakers"></img>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AboutProduct