import React from 'react'
import Button from "../Button/Button"


const ContactCard = ({img , title , text , btnName}) => {
  return (
    <div className='ContactCard'>
        <img src={img} alt="icon" />
        <div className='ContactCard__main'>
            <h4 className='ContactCard__title'>{title}</h4>
            <p className='ContactCard__text'>{text}</p>
            <Button btnName={btnName} />
        </div>
    </div>
  )
}

export default ContactCard