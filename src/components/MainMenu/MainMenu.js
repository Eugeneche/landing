import React from "react"
import useTranslations from "../useTranslations"
import LanguagesSwitcher from "./LanguagesSwitcher"
import NavLink from "./NavLink"
//import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as style from "./_MainMenu.module.scss"
import brand_logo from "../../images/brand_logo.png"

const MainMenu = ({locale}) => {

    const { home,
            about_product,
            contacts
            } = useTranslations()

  return (
    <nav className={style.mainMenu}>
      <div className={style.container}>
        <div className={style.pages}>
            <NavLink to="/">
              <img src={brand_logo}></img>
            </NavLink>
            {/* <AnchorLink to={locale === `cs` ? `/#about` : `/${locale}/#about`}>{about_product}</AnchorLink> */}
            {/* <NavLink to="/contacts">{contacts}</NavLink> */}
        </div>

        <LanguagesSwitcher />
      </div>
    </nav>
  )
}

export default MainMenu