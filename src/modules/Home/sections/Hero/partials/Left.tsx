import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { fadeUpSpring } from '@config/motion'
import AnimatedTextWord from '@components/motion/AnimatedTextWord'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCherecter'


const Left = () => {
  return (
    <div  className='relative col-span-2 z-10 md:text-center lg:text-left !mt-[-20px]' >

        <img alt="" src="/images/glassify/blur-cyan-0.png" width="530" height="530" decoding="async" data-nimg="1" className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50" />

        <div className='relative' >
            <AnimatedTextWord 
               text="Hi, my name is"
               className='text-lg'
            />
            
            <div>
               <AnimatedTextCharacter 
                  className='!font-medium !bg-clip-text !text-5xl !leading-normal md:!text-7xl md:!leading-[87px] !text-slate-300' 
                  text="Raihan Hosen." 
               />
               <AnimatedTextCharacter 
                  className='font-medium text-3xl sm:text-4xl tracking-normal md:text-5xl text-slate-400 mt-1' 
                  text="I build things for the web." 
               />
            </div>

            <div className='my-5 md:my-8 leading-7 text-slate-400 md:text-lg max-w-3xl' >
               <AnimatedTextWord 
                  text="Highly motivated and very passionate Full Stack Developer with three years of experience in Typescript, React js, Next js, Firebase, Tailwind CSS, Material UI, Node js, Express js, MongoDB"
               />
            </div>
        </div>

        <motion.div variants={fadeUpSpring}  initial="hidden" animate="visible" >
           <a href='#works' ><Button outlined > Check out my projects </Button></a>
        </motion.div>
    
    </div>
  )
}

export default Left