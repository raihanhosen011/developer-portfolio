import React from 'react'
import { useSelector } from 'react-redux'

import { fadeInUp } from '@components/animations'
import { motion } from 'framer-motion'

import { SectionTitle } from '@components/shared/Global/global.style'
import { PartnerConent, PartnerContainer, PartnerLogos, PartnerTexts, PartnerWrapper } from './partner.styled'
import SinglePartner from './partials/SinglePartner'
import withTransition from '@components/animations/withTransition'

function Index() {
  const { data } = useSelector(state => state) 

  const { partners, partnerInfo } = data

  return (
    <PartnerContainer>
       {partners && 
         <PartnerWrapper as={motion.div} {...fadeInUp} >
            
               <SectionTitle>
                  <h1> {partners.sectiontitle} </h1>
                  <span className='title-bg' > clients </span>
               </SectionTitle>
               
               <PartnerConent>
                  <PartnerTexts>
                     <h2>{partners.title}</h2>
                     <p>{partners.desc}</p>
                  </PartnerTexts>  

                  <PartnerLogos>
                     {partnerInfo.map(({ url, img }) => <SinglePartner key={url} name={img} to={url} />)}
                  </PartnerLogos>  
               </PartnerConent>

         </PartnerWrapper>        
       }

    </PartnerContainer>
  )
}

export default withTransition(Index)