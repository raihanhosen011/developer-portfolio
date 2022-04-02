import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import { UilArrowRight } from '@iconscout/react-unicons'
import withTransition from '@components/animations/withTransition'
import { fadeInUp } from '@components/animations'

import { CaptionIconBtn } from '@components/shared/Icon'
import Social from '../../Layout/Social'
import { HeroContainer, HeroWrapper, HeroLeft, HeroRight, HeroImage, HeroContent, HeroShape } from './hero.styled'

function Index(){
  const { data } = useSelector(state => state)

  const { herodata, social } = data

  return (
    <HeroContainer >
       <HeroWrapper as={motion.div} {...fadeInUp} >
            <HeroLeft > 
               <HeroImage className='hero-model' />
            </HeroLeft>    

           <HeroRight >
              {herodata &&
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
              }
           </HeroRight> 
            
           <HeroShape />          
       </HeroWrapper>
    </HeroContainer>
  )
}

export default withTransition(Index) 