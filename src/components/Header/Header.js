import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Header.module.scss"



const HeaderSlider = () => {

    return (
        <div className={styles.headerSlider}>

            <StaticImage className={styles.artDirected}
                src="../../images/header.jpg"
                /* height={1600} */
                quality={100}
                layout="constrained"
                style={{left: "50%",
                        transform: "translate(-50%, 0)"}}
                formats={["auto", "webp", "avif"]}
                alt="A woman rented a car"
            />     
                 
        </div>
    )
}

export default HeaderSlider