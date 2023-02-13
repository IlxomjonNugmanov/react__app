import React from 'react'
import FooterList from './FooterList'
import logo from "../../img/logo.png"
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerLeft'>
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
            <p className='footerLeft__text'>
                Combined with a handful of model sentence 
                structures,  generate always free from repetition 
                injected chunks as necessary.
            </p>
        </div>
        <div className="footerRight">
          <FooterList title={"Menu"} bir={"Home"} ikki={'Schedule'} uch={"Quota"} tort={"Information"}/>
          <FooterList title={"Vaccine Type"} bir={"Sinovac"} ikki={'Astarzon'} uch={"Sinopahm"}/>
          <FooterList title={"Emergency Contact"} bir={"Whatsap"} ikki={'Email'} uch={"Instagram"} tort={"Telefon Kantor"}/>
        </div>
    </div>
  )
}

export default Footer