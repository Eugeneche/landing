import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "../layout"
import LocalizedLink from "../localizedLink"
import useTranslations from "../useTranslations"
import { useShoppingCart } from 'use-shopping-cart'
import { loadStripe } from "@stripe/stripe-js"
import * as styles from "./_Product.module.scss"
import "./Product.scss"

const isBrowser = typeof window !== "undefined"

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
          lookup_key
        }
      }
    }
    `)

    const { 
/*       main_h2,
      CloudWalker,
      CityPulse, */
      sizing,
      order_online_payment,
      order_on_delivery
   } = useTranslations()

   const {
    /* formattedTotalPrice, */
    /* redirectToCheckout, */
    /* addItem, */
    /* cartCount, */
    /* clearCart, */
  } = useShoppingCart()

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

    const { locale } = React.useContext(LocaleContext)

    const renewSizesRange = () => {

      sizesRange.length = 0
      let arr = []

      allProducts.forEach(prod => {
        if (prod.product.metadata.name === product.product.metadata.name &&
          prod.product.metadata.color === product.product.metadata.color) {
            arr.push(prod)
            arr.sort((a, b) => a.nickname - b.nickname)
          }     
      })
      setSizesRange(arr)
      setSize(arr[0])
      setIndex(0)
    }

    const getSize = (i, obj) => {
      setIndex(i)
      setSize(obj)
    }

    const setCurrentProduct = (e) => {
      setProduct(uniqueProducts[e.target.id])
    }

    useEffect(() => {
      renewSizesRange()
    }, [product.product.metadata.color, product.product.metadata.name])

    const handleSubmit = async event => {
      event.preventDefault()

      const price = size?.lookup_key
      const stripe = await loadStripe('pk_test_51O4scKFMr3lmpXgFMWy8l78D41LYkgIW3ArVdJ5jaSkI8K0nnarUXNU81QPoYQ3QXPFvulI8DD3DjutBxxt6PluF00xTf8GqeV')
      
      const { error } = await stripe.redirectToCheckout({
        mode: "payment",
        lineItems: [{ price, quantity: 1 }],
        successUrl: `/delivery`,
        cancelUrl: `/contacts`,
      })
  
      if (error) {
        console.warn("Error:", error)
        //setLoading(false)
      }
    }
    //console.log(size.product)
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <h2>About Product</h2>

                <div className={styles.productInfoBlock}>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{product.product.metadata.name}</h3>
                        <p>{product.product.metadata[locale]}</p>
                        <p className={styles.productPrice}>{`$${(size?.unit_amount / 100).toFixed(2)}`}</p>

                        <div className={styles.productSizes}>
                          {sizesRange.map((size, idx) => {
                            return (
                              <button 
                                id={size?.nickname}
                                onClick={(e) => getSize(idx, size)}
                                key={size?.nickname} 
                                className={idx === index ? "active" : "regular"}
                              >
                                  {size?.nickname}
                              </button>
                            )
                          })}
                        </div>
                    </div>

                    <div className={styles.productImage}>
                      <img src={product.product.images} alt="sneakers"></img>
                      <div className={styles.buttons}>
                        <div className={styles.size}>{`${sizing}: ${size?.nickname}`}</div>
                        {/* <LocalizedLink to="/order">
                          <button 
                            onClick={() => handleSubmit}
                            className={styles.orderBtn}>{order_online_payment}</button>
                        </LocalizedLink> */}
                        <button 
                          className={styles.orderBtn}
                          onClick={(e) => handleSubmit(e)}
                        >{order_online_payment}</button>
                        <div className={styles.price}>{`$${(size?.unit_amount / 100).toFixed(2)}`}</div>
                        <LocalizedLink to="/delivery">
                          <button className={styles.orderBtn}>{order_on_delivery}</button>
                        </LocalizedLink>
                      </div>
                    </div>

                </div>
                <div className={styles.photosSlider} >
                    {uniqueProducts.map((product, i) => {
                        return (
                            <button 
                              key={product.product.id}                              
                              onClick={(e) => setCurrentProduct(e)}
                            >
                              <img id={i} src={product.product.images} alt="sneakers"></img>
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}

export default Product
