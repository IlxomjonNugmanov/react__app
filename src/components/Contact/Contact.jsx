import React from 'react'
import ContactCard from './ContactCard'
import "./contact.css"

import map from "../../img/map.png"
import chat from "../../img/chat.png"
import massege from "../../img/massege.png"
import tel from "../../img/tel.png"



const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact__left">

        </div>
        <div className="contactRight">
           <div className="contactRight__header">
                <h2 className='contactRight__headerTitle'>
                   Emergency Contact
                </h2>
                <p className='contactRight__headerText'>
                   Combined with a handful of model sentence structures,  generate 
                   always free from repetition injected.
                </p>
           </div>
            <div className="contactCardWrap">
              <ContactCard img={tel} title={"Call"} text={"0822 - xxx - xxx"} btnName={"Call Now"}/>
              <ContactCard img={chat} title={"Chat"} text={"Type fast chat"} btnName={"Chat"}/>
              <ContactCard img={map} title={"Go to Near Location"} text={"You can use emergency"} btnName={"Video Call"}/>
              <ContactCard img={massege} title={"Email"} text={"If you want update"} btnName={"Send Email"}/>
            </div>
        </div>

    </div>
  )
}

export default Contact