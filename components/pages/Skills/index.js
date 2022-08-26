import { fadeInUp } from '@components/animations'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import { SectionTitle } from '@components/shared/Global/global.style'
import { SkillContainer, SkillSection, SkillWrapper, SkillItemWrapper } from './skill.styled'
import SkillItem from './partials/SkillItem'
import withTransition from '@components/animations/withTransition'
import Glassmorphism from '@components/shared/Glassmorphisom'

function Index() {
  const { data } = useSelector(state => state)  

  const { skills, fullTools } = data  

  return (
    <SkillContainer>
       <Glassmorphism /> 

       {skills && 
        <SkillWrapper as={motion.div} {...fadeInUp} >
        
                <SectionTitle>
                    <h1> {skills.sectiontitle} </h1>
                    <span className='title-bg' > expert </span>
                </SectionTitle>  

                <SkillSection>
                    <h2> Language and Database </h2>

                    <SkillItemWrapper>
                       {fullTools.language.map(({ name, icon }, index) => <SkillItem key={index} name={name} icon={icon} />)} 
                    </SkillItemWrapper>
                </SkillSection>

                <SkillSection>
                    <h2> Language, Framework &amp; other </h2>

                    <SkillItemWrapper>
                        {fullTools.framework.map(({ name, icon }, index) => <SkillItem key={index} name={name} icon={icon} />)} 
                    </SkillItemWrapper>
                </SkillSection>
        </SkillWrapper>         
       } 
    </SkillContainer>
  )
}

export default withTransition(Index)