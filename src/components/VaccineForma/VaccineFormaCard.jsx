import React from 'react'

const VaccineFormaCard = ({labelName , inputType , placeholder}) => {
  return (
    <div className='VaccineFormaCard'>
        <label className='VaccineFormaCard__label'>
            {labelName}
         <input type={inputType}  placeholder={placeholder}/>
        </label>

    </div>
  )
}

export default VaccineFormaCard