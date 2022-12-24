import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/legacy/image'
//
import { RiFilePaperLine } from 'react-icons/ri'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
//
import { motionStep } from '@config/motion'
import { ProjectTypes } from '@config/types'


const ProjectCard = ({ live, thumnail, code, title, description, tech } : ProjectTypes) => {
  return (
        <motion.div 
            variants={{  
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 50,
                },
              },
            
              hidden: {
                opacity: 0,
                y: 50,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 1 * 20 + 50,
                },
              },
            }}
            {...motionStep}
            className='col-span-12 sm:col-span-6 md:col-span-4 bg-slate-800 rounded-xl p-4 group' 
        >
            <div>
                    <Link href={`${live}`} >
                        <div className='h-[200px] w-full relative rounded-xl overflow-hidden'>
                            <Image
                                src={`/images/projects/${thumnail}`} 
                                blurDataURL={`/images/projects/${thumnail}`}
                                className='transition-all duration-300 group-hover:scale-110 group-hover:rotate-3'
                                layout='fill'
                                objectFit='cover'
                                quality={100}
                                alt='loading...' 
                            />

                            <div className='absolute top-0 bottom-0 left-0 right-0 bg-sky-900/50 transition-all duration-300 cursor-pointer group-hover:opacity-0' />           
                        </div>  
                    </Link>
            </div>

            <div>
                <div className='flex items-center justify-between my-5' >
                    <RiFilePaperLine className='text-2xl text-sky-400' />

                    <div className={'flex justify-end items-center gap-3 text-slate-300'} >

                        {live && <Link href={`${live}`} target='_blank' className='hover:text-sky-400 transition-all duration-300 hover:scale-110 text-2xl' >
                            <HiOutlineExternalLink />     
                        </Link>}

                        {code && <Link href={`${code}`} target='_blank' className='hover:text-sky-400 transition-all duration-300 hover:scale-90 text-[1.2rem]' > 
                            <FiGithub />     
                        </Link>}

                    </div>
                </div>


                <h1 className='text-xl font-medium mb-1 text-slate-200' > {title} </h1>
                <p className='text-slate-400' > {description}  </p>  

                <div className='flex text-slate-300 mt-7 gap-x-4 flex-wrap' >
                  {tech.map((e: string, i: number) => <span key={i} >{e}</span>)}
                </div>

            </div>
        </motion.div>     
  )
}

export default ProjectCard