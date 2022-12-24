"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IoMdArrowDropright } from 'react-icons/io'
//
import { worked_data } from '../config/constants'
import { WorkedTypes } from '../config/types'
import { cx } from '@config/constants'
import Pager from './Pager'
import { fadeTop, motionStep, worked_1, worked_2, worked_3 } from '@config/motion'


// list animation
const lAnimation = [ worked_1, worked_2, worked_3 ]

const Content = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [tabSidelineHeight, setTabSidelineHeight] = useState<number>(0);
  const [tabSidelineTop, setTabSidelineTop] = useState<number>(0);
  
  const tabsRef = useRef<any>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeIndex];
      setTabSidelineTop(currentTab?.offsetTop ?? 0);
      setTabSidelineHeight(currentTab?.clientHeight ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeIndex]);


  return (
    <div className='flex-wrap lg:flex-nowrap flex gap-10' >
        <motion.div variants={fadeTop} {...motionStep} className='relative min-w-[200px]' >
          <div>
            {worked_data.map((e: WorkedTypes, i: number) => 
              <div 
                key={i} 
                onClick={() => setActiveIndex(i)}
                ref={(el) => (tabsRef.current[i] = el)}
                className={cx(
                  activeIndex === i && 'bg-sky-600/10 text-sky-400',
                  'tab__item'
                )}
              > 
                {e.label} 
              </div>
            )}  
          </div>

          <span
            className="absolute left-0 block w-1 bg-sky-400 transition-all duration-300"
            style={{ top: tabSidelineTop, height: tabSidelineHeight }}
          />
        </motion.div>     
        
        <Pager value={activeIndex} >
          {worked_data.map(({ title, url, company, deadline, description }: WorkedTypes, i: number) => (
             <div key={i} >
                 <motion.div variants={worked_1} {...motionStep} >
                     <h1 className='text-xl font-medium text-slate-300' > 
                         {title} 
                         <Link target='_blank' href={url} className='text-sky-300 border-b border-b-sky-300 border-dotted' > @{company} </Link> 
                     </h1>
                     <p className='text-slate-400 font-medium mt-1' > {deadline} </p>      
                 </motion.div>
         
                 <ul className='space-y-5 mt-10 max-w-xl' >
                     {description.map((e: string, i: number) => (
                         <motion.li key={i} variants={lAnimation[i]} {...motionStep} className='gap-1 flex text-slate-400 select-none' > 
                             <span className=' min-w-10' ><IoMdArrowDropright className='text-sky-400 text-[1.3rem]' /> </span>
                             {e}
                         </motion.li> 
                     ))}             
                 </ul> 
             </div> 
          ))}       
        </Pager>
    </div>
  )
}

export default Content