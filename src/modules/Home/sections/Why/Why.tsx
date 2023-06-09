import YouTube from 'react-youtube';
import React  from 'react'
import { motion } from 'framer-motion' 
//
import { fadeLeft, motionStep } from '@config/motion'


const Why = () => {
  return (
    <section id='why' className='container' >

      <motion.h1 variants={fadeLeft} {...motionStep} className='flex sm:items-center gap-2 text-lg md:text-3xl font-medium text-slate-300' >
        <span className='text-sky-400 font-mono' >00. </span>
        Why people love to work with Raihan?
      </motion.h1>

      <motion.div variants={fadeLeft} {...motionStep} className='cols-span-2 mt-10' >
        <div className='w-fit relative group rounded-xl overflow-hidden after:transition-all after:duration-200 after:hover:left-[12px] after:hover:top-[12px] after:w-full after:z-30 after:h-full after:border-[2px] after:absolute after:top-[20px] after:left-[20px] after:rounded-xl after:border-sky-500' >
          <YouTube
            videoId={'yOHVhzaeArU'}
            className='w-full rounded-xl border-[3px] border-sky-900 transition-all duration-200 group-hover:translate-y-[2px] group-hover:translate-x-[2px] relative z-[9999]'
            opts={{ 
              playerVars: {
                autoplay: 0,
                controls: 1,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
              },
            }}
          />
          <div className='absolute rounded-xl z-[50] top-0 bottom-0 right-0 left-0 bg-sky-700/10 hover:bg-transparent transition-all duration-200 cursor-pointer' />
        </div>
      </motion.div>


    </section>
  )
}

export default Why