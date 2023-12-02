import React from "react"
//import * as styles from "./_Image.module.scss"
import { StaticImage } from "gatsby-plugin-image"


const Image = () => {

    return (
        <section>
            <StaticImage 
                src="../../images/jogging.jpg"
                alt="jogging"
                style={{
                    maxHeight: "600px",
                    width: "100%"
                }}
            />
        </section>
    )

}

export default Image