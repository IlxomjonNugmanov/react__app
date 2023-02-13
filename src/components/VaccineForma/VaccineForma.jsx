import React from 'react'
import VaccineFormaCard from './VaccineFormaCard'
import Button from "../Button/Button"
import "./VaccineForma.css"

const VaccineForma = () => {
  return (
    <div>
      <div className="VaccineForma__header">
        <h2 className='VaccineForma__headerTitle'>Get Vaccine Now</h2>
        <p className='VaccineForma__headerText'>Combined with a handful of model sentence structures,  generate always free from repetition injected.</p>
      </div>
      <div className="VaccineForma__main">
        <div className="VaccineFormaWrap">
           <VaccineFormaCard labelName={"Full Name"} inputType={"text"} placeholder={"Enter Your name"}/>
           <VaccineFormaCard labelName={"Email or phone number"} inputType={"text"} placeholder={"Enter your email or number"}/>
           <VaccineFormaCard labelName={"Address"} inputType={"text"} placeholder={"Address"}/>
           <VaccineFormaCard labelName={"Disease history"} inputType={"text"} placeholder={"Enter diese history"}/>
           <VaccineFormaCard labelName={"Level Vaccination"} inputType={"select"} placeholder={"Choose Level"}/>
           <VaccineFormaCard labelName={"Near Vaccination Location"} inputType={"text"} placeholder={"Indonesia"}/>
        </div>
        <div className="VaccineForma__btn">
          <Button btnName={"Vaccine Now"}/>
        </div>
      </div>
    </div>
  )
}

export default VaccineForma