import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { CartProvider } from "use-shopping-cart"
import MainMenu from "./MainMenu/MainMenu"
import Footer from "../components/Footer/Footer"
import MdxLink from "./mdxLink"

import "./layout.css"

const LocaleContext = React.createContext()

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
const Layout = ({ children, pageContext: { locale } }) => {

  return (
  <LocaleContext.Provider value={{ locale }}>
    <div className="global-wrapper">
      <CartProvider
        // Mode configuration for Stripe: payment or subscription
        mode="payment"
        // The mode for how you want to use the hooks. 'client-only' and 'checkout-session' are the options
        cartMode="client-only"
        stripe={process.env.STRIPE_PUBLISHABLE_KEY}
        // The URL to which Stripe should send customers when payment is complete.
        successUrl={`${window.location.origin}/delivery`}
        // The URL to which Stripe should send customers when payment is canceled.
        cancelUrl={`${window.location.origin}/contacts`}
        currency="USD"
        // https://stripe.com/docs/payments/checkout/client#collect-shipping-address
        allowedCountries={['US', 'GB', 'CZ']}
        // https://stripe.com/docs/payments/checkout/client#collect-billing-address
        billingAddressCollection={true}
      >
        <MainMenu locale={locale} />
        <MDXProvider components={{ a: MdxLink }}>
          <main>{children}</main>
          <Footer />
        </MDXProvider>
      </CartProvider>
    </div>
  </LocaleContext.Provider>
)}

export { Layout, LocaleContext }
