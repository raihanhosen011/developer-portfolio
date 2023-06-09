import React from 'react'
import { motion } from 'framer-motion'
//
import Left from './partials/Left'
import Right from './partials/Right'
//
import { fadeLeft, motionStep } from '@config/motion'


const About = () => {
  return (
    <section id='about' className='container' >
      
      <motion.h1 variants={fadeLeft} {...motionStep} className='flex items-center gap-2 text-lg md:text-3xl font-medium text-slate-300' > 
        <span className='text-sky-400 font-mono' >01. </span>
        About me 
      </motion.h1>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-20' >
        <Left />
        <Right /> 
      </div>

    </section>
  )
}

export default About