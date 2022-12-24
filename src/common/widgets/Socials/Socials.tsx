"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
//
import { socialData } from './config/constans'
import { SocialTypes } from './config/types'
import { fadeTop, motionStep } from '@config/motion'

const Socials = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} id="__social" className='fixed z-[999] bottom-0 left-[40px] hidden xl:block' >
        <ul className='space-y-6 after:h-[90px] after:w-[1px] after:bg-slate-400 after:block after:mx-auto after:mt-6' > 
           {socialData.map((e: SocialTypes, i: number) => 
              <li key={i} >
                <Link 
                   href={e.url} 
                   target='_blank'
                   className='text-[22px] text-slate-400 hover:text-sky-400 cursor-pointer transition-all duration-300 hover:translate-y-[-10px]' 
                >
                    {<e.icon />}
                </Link>
              </li>
           )}
        </ul>  
    </motion.div>
  )
}

export default Socials