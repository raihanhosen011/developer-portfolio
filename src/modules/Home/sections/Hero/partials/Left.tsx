import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { firstTitle, letter } from '@config/motion'


const Left = () => {
  return (
    <motion.div animate="animate" initial="initial"  className='relative col-span-2 z-10 md:text-center lg:text-left' >
        
        <img alt="" src="/images/glassify/blur-cyan-0.png" width="530" height="530" decoding="async" data-nimg="1" className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50" />

        <div className='relative' >
            <p className='font-mono text-lg' > Hi, my name is </p>
            
            <motion.div  >
               <motion.h1 
                  variants={firstTitle} 
                  initial="initial" 
                  animate="animate"
                  className='inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 font-medium bg-clip-text font-display text-5xl leading-normal md:text-7xl md:leading-[87px] text-transparent' 
               > 
                  <motion.span variants={letter} > R </motion.span>
                  <motion.span variants={letter} > a </motion.span>
                  <motion.span variants={letter} > i </motion.span>
                  <motion.span variants={letter} > h </motion.span>
                  <motion.span variants={letter} > a </motion.span>
                  <motion.span variants={letter} > n </motion.span>

                  <motion.span variants={letter} > H </motion.span>
                  <motion.span variants={letter} > o </motion.span>
                  <motion.span variants={letter} > s </motion.span>
                  <motion.span variants={letter} > e </motion.span>
                  <motion.span variants={letter} > n </motion.span>
                  <motion.span variants={letter} > . </motion.span>
               </motion.h1>
               
               <h1 className='font-medium text-3xl sm:text-4xl tracking-normal md:text-5xl text-slate-400' > I build things for the web. </h1>
            </motion.div>

            <div className='my-5 md:my-8 leading-7 text-slate-400 md:text-lg max-w-3xl' >
               <p className='' >I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p> 
            </div>
        </div>

        <div>
           <Button outlined > Check out my prfoile </Button>
        </div>
    
    </motion.div>
  )
}

export default Left