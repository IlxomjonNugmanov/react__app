import React from 'react'
import Button from '../Button/Button'

const Nav = ({first , secont , thri , four}) => {
  return (
    <div className="header__linkWrap">
      <ul className="header__list">
        <li className="header__iteam"><a href="#">{first}</a></li>
        <li className="header__iteam"><a href="#">{secont}</a></li>
        <li className="header__iteam"><a href="#">{thri}</a></li>
        <li className="header__iteam"><a href="#">{four}</a></li>
        <li className="header__iteam">
          <Button btnName={'Call Center'}/>
        </li>
      </ul>
    </div>
  )
}

export default Nav