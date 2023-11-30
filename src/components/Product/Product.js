import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "../layout"
import * as styles from "./_Product.module.scss"
import "./Product.scss"
//import { sizes } from "gatsby-plugin-sharp"

const Product = () => {

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
              cs
              en
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

    const allProducts = data.allStripePrice.nodes

    const uniqueProducts = allProducts.filter((product, i, self) => {
      return i === self.findIndex((t) => {
        return t.product.id === product.product.id && t.product.id === product.product.id
      })
    })

    const [ product, setProduct ] = useState(uniqueProducts[0])
    const [ sizesRange, setSizesRange ] = useState([])
    const [ size, setSize ] = useState(sizesRange[0])
    const [ index, setIndex ] = useState(0)
    //const [price, setPrice] = useState(false)
console.log(product)
//console.log(index)
    const { locale } = React.useContext(LocaleContext)



    const renewSizesRange = () => {

      sizesRange.length = 0
      let arr = []

      allProducts.forEach(prod => {
        if (prod.product.metadata.name === product.product.metadata.name &&
          prod.product.metadata.color === product.product.metadata.color) {
            arr.push(prod.nickname)
            arr.sort((a, b) => a - b)
          }     
      })
      setSizesRange(arr)
      setSize(arr[0])
    }

    const getSize = (e, i) => {
      e.target.getAttribute('id') === size ? 
        e.target.setAttribute("class", "active") : 
        e.target.setAttribute("class", "regular")

      setIndex(i)
      setSize(e.target.getAttribute('id'))
    }

    const setCurrentProduct = (e) => {
      setProduct(uniqueProducts[e.target.id])
    }

    useEffect(() => {
      renewSizesRange()
    }, [product.product.metadata.color, product.product.metadata.name])

/*     useEffect(() => {
      setSize(size)
    }) */

/*     const regular = {
      border: "1px solid grey",
      padding: "5px 10px",
      marginRight: "5px",
      background: "none"
    }

 */
    const active = {
      background: "green"
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>About Product</h2>
                <div className={styles.productInfoBlock}>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{product.product.metadata.name}</h3>
                        <p>{product.product.metadata[locale]}</p>
                        <p className={styles.productPrice}>{`$${(product.unit_amount / 100).toFixed(2)}`}</p>
                        <div className={styles.productSizes}>
                          {sizesRange.map((size, idx) => {
                            return (
                              <button 
                                id={size}
                                onClick={(e) => getSize(e, idx)}
                                key={size} 
                                className={idx === index ? "active" : "regular"}
                                /* style={} */
                                /* className="regular" */
                              >
                                  {size}
                              </button>
                            )
                          })}
                        </div>
                    </div>
                    <div className={styles.productImage}>
                        <img src={product.product.images} alt="sneakers"></img>
                    </div>
                </div>
                <div className={styles.photosSlider} >
                    {uniqueProducts.map((product, i) => {
                        return (
                            <div 
                              key={product.product.id} 
                              
                              onClick={(e) => setCurrentProduct(e)}
                            >
                              <img id={i} src={product.product.images} alt="sneakers"></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}

export default Product