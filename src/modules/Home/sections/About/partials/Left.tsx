import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
//
import { skills } from '@modules/Home/config/constanst'


const Left = () => {
  return (
    <div className='col-span-3' >

      <div className='space-y-4 mt-7 text-slate-400' >

        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
        <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
        <p>Here are a few technologies I’ve been working with recently:</p>

        <div className='__skills md:pr-56' >
           <ul className='grid grid-cols-2 space-y-2' >
              {skills.map((e: string, i: number) => (
                <li className='gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400' > <IoMdArrowDropright className='text-sky-400 text-xl' /> {e}</li> 
              ))}             
           </ul> 
        </div>

      </div>

    </div>
  )
}

export default Left