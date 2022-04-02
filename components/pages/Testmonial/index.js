import React,{useEffect, useState} from 'react'

import { fadeInUp } from '@components/animations'
import { motion } from 'framer-motion'

import { ClientDetails, TestmonialClients, TestmonialContainer, TestmonialContent, TestmonialTexts, TestmonialWrapper, TextsBody, TextsHead } from './testmonial.styled'
import Avatar from './partials/Avatar'
import ClientSlug from './partials/ClientSlug'

import { SectionTitle } from '@components/shared/Global/global.style'
import withTransition from '@components/animations/withTransition'
import { useSelector } from 'react-redux'

let initial = {
   slug : 0,  
   ownerImg : "safirali",
   companyImg : "hamper",
   name : "safir ali",
   position : "CEO of Hamper",
   review : "It was amazing working with Nico, he's very proactive and works together to finish the projects as quickly as possible. Amazing service!"  
 }

function Index() {
  const [texts, setTexts] = useState(initial)
  const [activeIndex, setActiveIndex] = useState(0)

  const selector = useSelector(state => state)
  const { testmonails } = selector.data

  function handleShow(index){
    setTexts(testmonails[index])
    setActiveIndex(index ? index : 0)
    return;
  }

  return (
    <TestmonialContainer>
       {testmonails &&
        <TestmonialWrapper as={motion.div} {...fadeInUp} >
            
            <SectionTitle>
               <h1> TESTMONIAL </h1>
               <span className='title-bg' > REVIEW </span>
            </SectionTitle> 

            <TestmonialContent>
               <TestmonialTexts>
                  <TextsHead>
                     <ClientDetails>
                       <h4> {texts?.name} </h4>
                       <p> {texts?.position} </p>
                     </ClientDetails>

                     <Avatar src={texts?.ownerImg} />
                  </TextsHead>

                  <TextsBody>
                     <p  > {texts?.review} </p>
                  </TextsBody>
               </TestmonialTexts>

               <TestmonialClients>
                  {testmonails.map(({ slug, companyImg }) => 
                      <ClientSlug 
                         key={slug} 
                         customClass={activeIndex === slug && 'active'}
                         click={() => handleShow(slug)} 
                         companyImg={companyImg}
                      />
                  )}
               </TestmonialClients>

               <img src='/images/quote.png' alt='quote image' className='testmonial-object' />
            </TestmonialContent>

        </TestmonialWrapper>       
       }
    </TestmonialContainer>
  )
}

export default withTransition(Index)