import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
//import * as styles from "./_HeaderSwiper.module.scss"
import "./headerSwiper.scss"
import Carousel from "nuka-carousel"


const HeaderSwiper = () => {

  const { 
    motto_1,
    motto_2
    } = useTranslations()

    return (
        <Carousel 
            carouselId="header"
            autoplay={true}
            autoplayInterval={4000}
            wrapAround={true}
            animation='fade'
            speed={1000}
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
                <div className="header-info">
                    <div className="header-logo">urbankicks</div>
                    <div className="header-model">arctic aura</div>
                    <div className="header-motto">{motto_1}</div>
                </div>
                
                <StaticImage 
                    style={{height: "fit-content"}}
                    imgStyle={{height: "auto"}}
                    src="../../images/header_white_2.jpg"
                    alt="sneakers"
                />
            </div>

            <div className="header-slide">               
                <StaticImage 
                    style={{height: "fit-content"}}
                    imgStyle={{height: "auto"}}
                    src="../../images/header_black.jpg"
                    alt="sneakers"
                />
                <div className="header-info">
                    <div className="header-logo-right">urbankicks</div>
                    <div className="header-model-right">city pulse</div>
                    <div className="header-motto-right">{motto_2}</div>
                </div>
            </div>


                    
        </Carousel>

    )
}

export default HeaderSwiper