import React from 'react'
import SVaccinationCard from './SVaccinationCard'
import Button from '../Button/Button'
import "./svaccination.css"

import ImgDate from "../../img/date.png"
import Imglocation from "../../img/location.png"
import Imgtype from "../../img/coolicon.png"

const SVaccination = () => {
  return (
    <div className='SVaccination'>
        <h2 className='SVaccination__title'>Schedule Vaccination</h2>
        <div className='SVaccination__cardWrap'>
            <SVaccinationCard img={Imglocation} title={"Location"} inpType={"text"} inpPlace={"Jakarta, Indonesia"}/>
            <SVaccinationCard img={ImgDate} title={"Date"} inpType={"date"} />
            <SVaccinationCard img={Imgtype} title={"Vaccine Type"} inpType={"text"} inpPlace={"Cinovac"}/>
            <Button btnName={"Find"}/>
        </div>
    </div>
  )
}

export default SVaccination