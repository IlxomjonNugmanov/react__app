import React from 'react'

const SVaccinationCard = ({img , title , inpType , inpPlace}) => {
  return (
    <div className='SVaccinationCard'>
        <img src={img} alt="img" />
        <div className='SVaccinationCard__main'>
           <h3 className='SVaccinationCard__title'>{title}</h3>
           <input type={inpType} placeholder={inpPlace}/>
        </div>
    </div>
  )
}

export default SVaccinationCard