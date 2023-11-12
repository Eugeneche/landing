import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import * as styles from "./_ProductOffer.module.scss"
//import { Link } from "gatsby"
import LocalizedLink from "../localizedLink"

const ProductOffer = () => {

    const { 
        main_h2,
        prod_description,
        prod_properties,
        order_online_payment,
        order_on_delivery
     } = useTranslations()

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>{main_h2}</h2>
                <div className={styles.products}>
                    <StaticImage src="../../images/brown.jpg" alt="brown jacket" />
                    <StaticImage src="../../images/black.jpg" alt="black jacket" />
                </div>
                <p className={styles.productDescription}>
                    {prod_description}
                </p>
                <p className={styles.productDescription}>
                    {prod_properties}
                </p>
                <div className={styles.buttons}>
                    <LocalizedLink to="/order">
                        <button className={styles.orderBtn}>{order_online_payment}</button>
                    </LocalizedLink>
                    <LocalizedLink to="/delivery">
                        <button className={styles.orderBtn}>{order_on_delivery}</button>
                    </LocalizedLink>
                </div>

                
            </div>
        </section>
    )

}

export default ProductOffer