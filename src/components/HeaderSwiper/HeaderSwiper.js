import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import * as styles from "./_HeaderSwiper.module.scss"
import "./headerSwiper.scss"
import Carousel from "nuka-carousel"


const HeaderSwiper = () => {

  const { 
    motto_1,
    motto_2
    } = useTranslations()

    return (
        <Carousel 
            autoplay={true}
            autoplayInterval={4000}
            wrapAround={true}
            animation='fade'
            speed={2000}
            pauseOnHover={false}
            withoutControls={true}
            afterSlide={() => {}}
/*             defaultControlsConfig={{
                nextButtonStyle: {display: "none"},
                prevButtonStyle: {display: "none"},
                pagingDotsClassName: "dot",
                pagingDotsContainerClassName: "dots"
            }} */
        >
            <div /* className={styles.slide} */ className="header-slide">
                <div className="header-motto">{motto_1}</div>
                <StaticImage 
                    className={styles.headerProductImage}
                    src="../../images/header_white_2.jpg"
                    alt="sneakers"
                />
                {/* <div className={styles.headerPizzaName}>Sneakers White</div> */}
            </div>

            <div /* className={styles.slide} */ className="header-slide">               
                <StaticImage 
                    className={styles.headerProductImage}
                    src="../../images/header_black.jpg"
                    alt="sneakers"
                />
                <div className="header-motto">{motto_2}</div>
                {/* <div className={styles.headerPizzaName}>Sneakers Black</div> */}
            </div>


                    
        </Carousel>

    )
}

export default HeaderSwiper