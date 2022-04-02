import React from 'react'
import { useSelector } from 'react-redux'
import { UilDownloadAlt } from '@iconscout/react-unicons'

import { fadeInUp } from '@components/animations'
import { motion } from 'framer-motion'

import withTransition from '@components/animations/withTransition'
import { CaptionIconBtn } from '@components/shared/Icon'
import { SectionTitle } from '../../shared/Global/global.style'
import { AboutContainer, AboutDescription, AboutRow, AboutWrapper, CountColumn, ExperienceCount, PersonalInfo } from './about.styled'

function Index() {
  const { data } = useSelector(state => state)

  const { aboutdata } = data

  return (
    <AboutContainer >
       {aboutdata &&
       <AboutWrapper as={motion.div} {...fadeInUp} >
          
            <SectionTitle>
               <h1>{aboutdata.sectiontitle}</h1>
               <span className='title-bg' > resume </span>
            </SectionTitle>

            <AboutDescription>
               <p>{aboutdata.description}</p>
               <h2>{aboutdata.quote}</h2>
            </AboutDescription>

            <AboutRow>
                <PersonalInfo>
                    <h2>{aboutdata.personalinfo.tabtitle}</h2>

                    <ul>
                      {Object.entries(aboutdata.personalinfo).map(([key, field]) => {
                          if(key !== 'tabtitle'){
                            return (
                              <li>
                                <span className='title' > {key} : </span>
                                <span className='value' > {field}</span>
                              </li>                                
                            )
                          }
                      })}
                    </ul>
                    <CaptionIconBtn caption='Download CV' icon={<UilDownloadAlt />} />
                </PersonalInfo>              

                <ExperienceCount>
                   {aboutdata.count.map(({ num, title }) => 
                      <CountColumn key={num} > 
                          <h1> {num} </h1>
                          <p> {title} </p>
                      </CountColumn>                   
                   )}
                </ExperienceCount>
            </AboutRow>  

       </AboutWrapper>        
       }
    </AboutContainer>
  )
}

export default withTransition(Index) 