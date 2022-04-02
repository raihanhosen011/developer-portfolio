import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UilArrow, UilDesktop } from '@iconscout/react-unicons'

import { ProjectButtons, SingleProjectBody, SingleProjectContainer, SingleProjectHead, Tools } from '../projects.styled'
import Lang from './Lang';

function SignleProject({ title, image, tools, demo, code }) {

   const responsive = {
   superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
   },
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
   }
   };

  return (
    <SingleProjectContainer>
       <SingleProjectHead>
          <Carousel responsive={responsive} autoPlay={false} >
             {image.map((_, index) => <img key={index} src={`/images/mockup/${_}.png`} alt='img' />)}
          </Carousel>
       </SingleProjectHead>   

       <SingleProjectBody>
          <h4> {title} </h4>

          <Tools>
            {tools.map(({ name, icon }, index) =>  <Lang key={index} name={name} icon={icon} />)}
          </Tools>  

          <ProjectButtons>
             <a href={code} target='_blank' rel="noreferrer" className='project-btn' > <span>code</span> <UilArrow /> </a>
             <a href={demo} target='_blank' rel="noreferrer" className='project-btn demo' > <span>demo</span> <UilDesktop /> </a>
          </ProjectButtons>  
       </SingleProjectBody>
    </SingleProjectContainer>
  )
}

export default SignleProject