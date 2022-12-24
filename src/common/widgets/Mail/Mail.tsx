"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
//
import { fadeTop, motionStep } from '@config/motion'

const Mail = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} id="__mail" className='fixed z-[999] bottom-0 right-[40px] hidden xl:block' >
        <div className='space-y-6 after:h-[90px] after:w-[1px] after:bg-slate-400 after:block after:mx-auto after:mt-6' >
           <Link href='mailto:raihanhosen011@gmail.com' className='text-[15px] text-slate-400 hover:text-sky-400 cursor-pointer transition-all duration-300 hover:translate-y-[-10px] rl' >raihanhosen011@gmail.com</Link> 
        </div>
    </motion.div>
  )
}

export default Mail