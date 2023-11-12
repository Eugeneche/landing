import React, { useState } from "react"
import * as styles from "./_Magnifier.module.scss"

const Magnifier = ({ image }) => {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  
  const onMouseHover = (e) => {

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    const x = ((e.pageX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setPosition({ x, y })

    //setCursorPosition({ x: e.pageX - left, y: e.pageY - top })
    setCursorPosition({ x: e.pageX - left, y: e.clientY - top })
  }
  
    return (
        <div 
          style={{
            position: "relative",
          }}
        
          className={styles.imgMagnifierContainer}
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
          onMouseMove={onMouseHover}
        >

          <img className={styles.mainImage} src={image}></img>

          {showMagnifier && 
            <div 
              className={styles.magnifier}
              style={{
                position: "absolute",
                left: `${cursorPosition.x - 100}px`,
                top: `${cursorPosition.y - 100}px`,
                pointerEvents: "none",
                zIndex: 999
              }}
            >
            <div 
              className={styles.magnifierImage}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: `${position.x}% ${position.y}%`,
              }}
            >
            </div>
          </div>
        }
          


        </div>
      )

}

export default Magnifier