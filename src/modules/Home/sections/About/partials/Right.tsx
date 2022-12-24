import Image from 'next/legacy/image'
import { motion } from 'framer-motion'
import React from 'react'
//
import { fadeLeft, motionStep } from '@config/motion'


const Right = () => {
  return (
    <motion.div variants={fadeLeft} {...motionStep} className='cols-span-2 lg:block hidden' >
      <div className='w-[300px] h-[350px] relative group rounded-xl after:transition-all after:duration-200 after:hover:left-[12px] after:hover:top-[12px] after:w-full after:z-30 after:h-full after:border-[2px] after:absolute after:top-[20px] after:left-[20px] after:rounded-xl after:border-sky-500' >
         <Image 
            src='/images/model/Raihan Hosen Image, Bangladeshi, The best web developer of bangladesh.jpg'  
            blurDataURL="/images/model/Raihan Hosen Image, Bangladeshi, The best web developer of bangladesh.jpg"
            className='rounded-xl z-40 transition-all duration-200 group-hover:translate-y-[2px] group-hover:translate-x-[2px]'
            layout='fill'
            objectFit='cover'
            quality={100}
            alt='loading...' 
         />
         
         <div className='absolute rounded-xl z-50 top-0 bottom-0 right-0 left-0 bg-sky-700/25 hover:bg-transparent transition-all duration-200 cursor-pointer' />
      </div> 
    </motion.div>
  )
}

export default Right