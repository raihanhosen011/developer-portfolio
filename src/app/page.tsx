"use client"

import React from 'react'
import { motion } from 'framer-motion'
//
import Home from '@modules/Home'

const page = () => {
  return (
    <motion.div initial='initial' animate='animate' id="__home" >
      <Home />
    </motion.div>
  )
}

export default page