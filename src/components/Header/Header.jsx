// import React, { useState } from "react"
import logo from "../../img/logo.png"
import Nav from "../Nav/Nav"
import './header.css'

function Header() {

  return (
    <div className="header">
      <div className="header__logo">
         <img  src={logo}/>
      </div>
      <Nav first={"Home"} secont={"Schedule"} thri={"Quota"} four={"Information"}/>
    </div>
  )
}

export default Header