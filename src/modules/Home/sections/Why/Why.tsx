import React from 'react'
import { motion } from 'framer-motion'
//
import { fadeLeft, motionStep } from '@config/motion'
import VideoIframe from '@components/VideoIframe/VideoIframe'


const Why = () => {
  return (
    <section id='why' className='container' >

      <motion.h1 variants={fadeLeft} {...motionStep} className='flex sm:items-center gap-2 text-lg md:text-3xl font-medium text-slate-300' >
        <span className='text-sky-400 font-mono' >00. </span>
        Why people love to work with Raihan?
      </motion.h1>

      <motion.div variants={fadeLeft} {...motionStep} className='cols-span-2 mt-10 max-w-[700px] rounded-2xl overflow-hidden' >
        <VideoIframe videoId='yOHVhzaeArU' />
      </motion.div>


    </section>
  )
}

export default Why