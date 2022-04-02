import { useSelector } from 'react-redux'

import { SectionTitle } from '@components/shared/Global/global.style'

import { fadeInUp } from '@components/animations'
import { motion } from 'framer-motion'

import { ProjectContainer, ProjectWrapper, NormalProjects } from './projects.styled'
import Featured from './partials/Featured'
import SignleProject from './partials/SingleProject'
import withTransition from '@components/animations/withTransition'

function Index() {
  const { data } = useSelector(state => state)

  const { projects, project } = data

  return (
    <ProjectContainer>
      {projects &&
        <ProjectWrapper  as={motion.div} {...fadeInUp}  >

              <SectionTitle>
                <h1> {projects.sectiontitle} </h1>
                <span className='title-bg' > works </span>
              </SectionTitle>

              <h3 className='project-text' >{projects.description}</h3>

              {project.featured.map((_, index) => <Featured key={index} {..._} />)}
           
              <NormalProjects>
                {project.all.map((_, index) => <SignleProject key={index} {..._} />)}           
              </NormalProjects>

        </ProjectWrapper>      
      }
    </ProjectContainer>
  )
}

export default withTransition(Index)