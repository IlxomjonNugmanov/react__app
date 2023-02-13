import React from 'react'
import ImportantSectionCard from './ImportantSectionCard'
import "./ImportantSection.css"
import undov from "../../img/undov.png"
import other from "../../img/other.png"
import stopX from "../../img/xx.png"
import peoples from "../../img/peols.png"




const ImportantSection = () => {
  return (
    <div className='ImportantSection'>
        <div className="ImportantSection__header">
            <h2 className='ImportantSection__headerTitle'>
                Why Vaccine Is Important?
            </h2>
            <p className='ImportantSection__headerText'>
               Combined with a handful of model sentence structures, to generate 
               always free from repetition injected.
            </p>
        </div>
        <div className="ImportantSection__cardWrap">
           <ImportantSectionCard img={undov} title={"Prevent covid 19 virus"} text={"Model sentence structures, to generate Lorem which looks reasonable"}/>
           <ImportantSectionCard img={other} title={"Protect others"} text={"Model sentence structures, to generate Lorem which looks reasonable"}/>
           <ImportantSectionCard img={stopX} title={"Stop the spread of covid 19"} text={"Model sentence structures, to generate Lorem which looks reasonable"}/>
           <ImportantSectionCard img={peoples} title={"Protect the next generation"} text={"Model sentence structures, to generate Lorem which looks reasonable"}/>
        </div>
    </div>
  )
}

export default ImportantSection