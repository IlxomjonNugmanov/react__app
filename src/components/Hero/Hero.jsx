import React from 'react'
import Button from '../Button/Button'
import ButtonBorder from '../Button/ButtonBorder'
import HeroFakeDiv from '../HeroFakeDiv/HeroFakeDiv'
import "./hero.css"
const Hero = () => {
  return (
    <div className='heroWrap'>
        <div className='hero__left'>
            <h1 className='hero__title'>
                Get Your Vaccine,
                Get Your Health
            </h1>
            <p className='hero__text'>
                There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, 
                by injected humour
            </p>
            <div className='hero__btnWarp'>
                <Button btnName={"Get Your Vaccine"}/>
                <ButtonBorder btnNameBorder={"Learn more"}/>
            </div>
        </div>
        <div className='hero__right'>
          <HeroFakeDiv/>
          <HeroFakeDiv/>
          <HeroFakeDiv/>
          <HeroFakeDiv/>
          <HeroFakeDiv/>
          <HeroFakeDiv/>
        </div>
    </div>
  )
}

export default Hero