import React from "react"
import LocalizedLink from "../localizedLink"

const linkStyles = {
    color: "#1a1a1a",
    textDecoration: "none"
}

const activeStyles = {
    color: "#787878",
    textDecoration: "underline"
}

const NavLink = ({ props, children, to }) => (
    <LocalizedLink to={to} style={linkStyles} activeStyle={activeStyles}>
      {children}
    </LocalizedLink>
)
  
  export default NavLink