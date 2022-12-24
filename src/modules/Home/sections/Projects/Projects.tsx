import React from 'react'
import { motion } from 'framer-motion'
//
import Featured from '@components/cards/Project/Featured'
import ProjectCard from '@components/cards/Project/ProjectCard'
import Button from '@components/Button'
import { fadeTop, fadeLeft, motionStep } from '@config/motion'


const Projects = () => {
  return (
    <section id='works' >

        <motion.h1 variants={fadeLeft} {...motionStep} className='flex items-center gap-2 text-3xl font-medium text-slate-300 mb-12' > 
          <span className='text-sky-400 font-mono' >03. </span>
          Some Things I’ve Built
        </motion.h1>

        <div className='space-y-20' >
          {[0,1,2,3].map((e: number, i: number) => (
            <motion.div variants={fadeTop} {...motionStep} >
              <Featured secondary={e % 2 === 0 ? false : true} />
            </motion.div>
          ))} 
        </div>

        <div className='grid grid-cols-12 gap-6 gap-y-8 my-20' >
          {[0,1,2,3,4,5,6,7,8].map((e: number, i: number) => <ProjectCard id={i} /> )}
        </div>

        <div className='flex items-center justify-center' >
          <Button outlined > See More </Button>
        </div>

    </section>
  )
}

export default Projects