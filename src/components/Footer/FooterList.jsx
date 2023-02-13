import React from 'react'

const FooterList = ({title , bir , ikki , uch, tort }) => {
  return (
   <ul className='footerList'>
     <li className='footerIteam'><h3>{title}</h3></li>
     <li className='footerIteam'><a>{bir}</a></li>
     <li className='footerIteam'><a>{ikki}</a></li>
     <li className='footerIteam'><a>{uch}</a></li>
     <li className='footerIteam'><a>{tort}</a></li>
   </ul>
  )
}

export default FooterList