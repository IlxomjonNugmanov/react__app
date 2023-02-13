import React from 'react'

const ImportantSectionCard = ({img , title , text}) => {
  return (
    <div className='ImportantSectionCard'>
        <img src={img} alt="img" />
        <h2 className='ImportantSectionCard__title'>{title}</h2>
        <p className='ImportantSectionCard__text'>{text}</p>
    </div>
  )
}

export default ImportantSectionCard