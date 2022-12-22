import React from 'react'
//
import Featured from '@components/cards/Project/Featured'
import ProjectCard from '@components/cards/Project/ProjectCard'
import Button from '@components/Button'


const Projects = () => {
  return (
    <section className='__projects' >

        <h1 className='flex items-center gap-2 text-3xl font-medium text-slate-300 mb-12' > 
          <span className='text-sky-400 font-mono' >03. </span>
          Some Things I’ve Built
        </h1>

        <div className='space-y-20' >
          <Featured />
          <Featured secondary />          
        </div>

        <div className='grid grid-cols-12 gap-6 gap-y-8 my-20' >
          <ProjectCard /> 
          <ProjectCard /> 
          <ProjectCard /> 
          <ProjectCard /> 
          <ProjectCard /> 
          <ProjectCard /> 
          <ProjectCard /> 
        </div>

        <div className='flex items-center justify-center' >
          <Button outlined > See More </Button>
        </div>

    </section>
  )
}

export default Projects