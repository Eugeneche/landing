import React from "react"
//import getStripe from "../utils/stripejs"
import { loadStripe } from "@stripe/stripe-js"
import { graphql } from "gatsby"
import Seo from "../components/seo"
//import { CartProvider } from "use-shopping-cart"
//import useTranslations from "../components/useTranslations"
import * as styles from "./pages.module.scss"

const OrderPage = ({data}) => {
  
/*   const { 
    choose_color,
    choose_size
  } = useTranslations() */

  //const [ color, setColor ] = useState('brown')
  //const [ size, setSize ] = useState('l')
  //const [ currentProduct, setCurrentProduct] = useState({})

  /* const allProducts = data.allStripePrice.nodes

  const handleSubmit = async event => {
    event.preventDefault()

    const price = "price_1OGNBAFMr3lmpXgFjlAK3pt1"
    const stripe = await loadStripe('pk_test_51O4scKFMr3lmpXgFMWy8l78D41LYkgIW3ArVdJ5jaSkI8K0nnarUXNU81QPoYQ3QXPFvulI8DD3DjutBxxt6PluF00xTf8GqeV')
    
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/delivery`,
      cancelUrl: `${window.location.origin}/contacts`,
    })

    if (error) {
      console.warn("Error:", error)
      //setLoading(false)
    }
  } */

  return (
    <>
      <div className={styles.container}>
        <h1>Order Page</h1>

        <div className={styles.chooseProduct}>


          <div className={styles.control}>




            <button className={styles.paymentBtn} /* onClick={(event) => handleSubmit(event)} */>Pay</button>

            <p>To make the test payment use the following card number:</p>
            <p>4242 4242 4242 4242</p>

            <p>Card expiration date:</p>
            <p>any future date</p>

            <p>CVV:</p>
            <p>any 3 numbers</p>

{/*             <a href={currentProduct?.metadata?.plink} target="_blank" rel="noreferrer">
              <button className={styles.paymentBtn}>Fast link</button>
            </a> */}

          </div>
        </div>
      </div>
    </>
  )
}

export const Head = () => <Seo title="Order Page" />

export default OrderPage

export const query = graphql`
query getProducts {
  allStripePrice(filter: {product: {metadata: {category: {eq: "wear"}}}}) {
    nodes {
      product {
        id
        name
        images
        metadata {
          size
          color
          price
          plink
        }
        default_price
      }
      unit_amount
    }
  }
}
`
