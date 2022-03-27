import React from 'react'
import { UilArrowRight } from '@iconscout/react-unicons'

import { CaptionIconBtn } from '@components/shared/Icon'
import Social from '../../Layout/Social'
import { HeroContainer, HeroWrapper, HeroLeft, HeroRight, HeroImage, HeroContent, HeroShape } from './hero.styled'

function Index({ herodata, social }) {
  return (
    <HeroContainer >
       <HeroWrapper>
           <HeroLeft>
               <HeroImage className='hero-model' />
           </HeroLeft>

           <HeroRight>
               <HeroContent>
                  <div>
                      <h2>{herodata.intro}</h2> 
                      <h1> 
                        <span> {herodata.wither} </span> 
                        <span className='hero-name' >{ herodata.name }</span> 
                      </h1>
                      
                      <h2>{ herodata.subtitle }</h2>
                  </div>

                  <p>{ herodata.pera }</p>
                  <CaptionIconBtn caption={herodata.button} icon={<UilArrowRight />} /> 

                  <Social social={social} />
               </HeroContent>
           </HeroRight> 
            
           <HeroShape />          
       </HeroWrapper>
    </HeroContainer>
  )
}

export default Index