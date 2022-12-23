import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { fadeUpSpring } from '@config/motion'
import AnimatedTextWord from '@components/motion/AnimatedTextWord'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCherecter'


const Left = () => {
  return (
    <div  className='relative col-span-2 z-10 md:text-center lg:text-left' >

        <img alt="" src="/images/glassify/blur-cyan-0.png" width="530" height="530" decoding="async" data-nimg="1" className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50" />

        <div className='relative' >
            <AnimatedTextWord 
               text="Hi, my name is"
               className='text-lg'
            />
            <p className='font-mono text-lg' >  </p>
            
            <div>
               <AnimatedTextCharacter 
                  className='!font-medium !bg-clip-text !text-5xl !leading-normal md:!text-7xl md:!leading-[87px] !text-slate-300' 
                  text="Raihan Hosen." 
               />
               <AnimatedTextCharacter 
                  className='font-medium text-3xl sm:text-4xl tracking-normal md:text-5xl text-slate-400' 
                  text="I build things for the web." 
               />
            </div>

            <div className='my-5 md:my-8 leading-7 text-slate-400 md:text-lg max-w-3xl' >
               <AnimatedTextWord 
                  text="I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement."
               />
            </div>
        </div>

        <motion.div variants={fadeUpSpring}  initial="hidden" animate="visible" >
           <Button outlined > Check out my prfoile </Button>
        </motion.div>
    
    </div>
  )
}

export default Left