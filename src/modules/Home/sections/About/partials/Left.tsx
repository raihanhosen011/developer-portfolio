import React from 'react'
import { motion } from 'framer-motion'
import { IoMdArrowDropright } from 'react-icons/io'
//
import { skills } from '@modules/Home/config/constanst'
import { fadeTop, motionStep } from '@config/motion'


const Left = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className='col-span-3' >

      <div className='space-y-4 mt-7 text-slate-400' >

        <p> Hello! I'm Raihan, a passionate web developer who loves creating captivating experiences on the internet. My journey into web development began in 2020 when I started experimenting with customizing Tumblr themes. Through tinkering with HTML and CSS, even something as simple as editing a reblog button, I discovered my fascination for building things online.</p>
        <p>Since then, I've had the incredible opportunity to work in diverse environments, including an advertising agency, a start-up, a large corporation, and a student-led design studio. These experiences have shaped my expertise in crafting accessible and inclusive products and digital experiences. Currently, I'm thrilled to be a part of Upstatement, where I collaborate with a range of clients to bring their visions to life.</p>
        <p> I believe in the power of the web to connect people and create meaningful interactions. With a keen eye for detail and a commitment to user-centric design, I strive to deliver exceptional web solutions that leave a lasting impact. </p>
        <p> Let's collaborate and turn your ideas into remarkable digital experiences! </p>

        <p>Here are a few technologies I’ve been working with recently:</p>

        <div className='__skills md:pr-56' >
           <ul className='grid grid-cols-2 space-y-2' >
              {skills.map((e: string, i: number) => (
                <li key={i} className='gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400' > <IoMdArrowDropright className='text-sky-400 text-xl' /> {e}</li> 
              ))}             
           </ul> 
        </div>

      </div>

    </motion.div>
  )
}

export default Left
