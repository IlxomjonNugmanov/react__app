import React from 'react'
import "./partners.css"


const Partners = ({first , secont , third , four}) => {
  return (
    <div className='partnersWrap'>
       <a href="#">{first}</a>
       <a href="#">{secont}</a>
       <a href="#">{third}</a>
       <a href="#">{four}</a>
    </div>
  )
}

export default Partners