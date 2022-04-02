import React,{useState} from 'react'

import { fadeInUp } from '@components/animations'
import { motion } from 'framer-motion'

import { ClientDetails, TestmonialClients, TestmonialContainer, TestmonialContent, TestmonialTexts, TestmonialWrapper, TextsBody, TextsHead } from './testmonial.styled'
import Avatar from './partials/Avatar'
import ClientSlug from './partials/ClientSlug'
import data from './partials/testmonialData.json'

import { SectionTitle } from '@components/shared/Global/global.style'
import withTransition from '@components/animations/withTransition'

function Index() {
  const [texts, setTexts] = useState(data[0])
  const [activeIndex, setActiveIndex] = useState(0)

  function handleShow(index){
    setTexts(data[index])
    setActiveIndex(index ? index : 0)
    return;
  }

  return (
    <TestmonialContainer>
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

                     <Avatar src={texts?.avatar} />
                  </TextsHead>

                  <TextsBody>
                     <p  > {texts?.review} </p>
                  </TextsBody>
               </TestmonialTexts>

               <TestmonialClients>
                  {data.map(({ avatar, slug }) => 
                      <ClientSlug 
                         key={slug} 
                         customClass={activeIndex === slug && 'active'}
                         src={avatar} 
                         click={() => handleShow(slug)} 
                      />
                  )}
               </TestmonialClients>

               <img src='/images/quote.png' alt='quote image' className='testmonial-object' />
            </TestmonialContent>

        </TestmonialWrapper>
    </TestmonialContainer>
  )
}

export default withTransition(Index)