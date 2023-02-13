import React from 'react'
import ButtonCard from '../Button/ButtonCard'

const HeroBotmCard = ({title , text , btnName}) => {
  return (
    <div className='HeroBotmCard'>
        <h3 className="HeroBotm__title">{title}</h3>
        <p className='HeroBotm__text'>{text}</p>
        <ButtonCard buttonCardName={btnName}/>
    </div>
  )
}

export default HeroBotmCard