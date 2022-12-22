import React from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
//
import { RiFilePaperLine } from 'react-icons/ri'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'


const ProjectCard = () => {

  
  return (
        <div className='col-span-4 bg-slate-800 rounded-xl p-4 group' >
            <div>
                    <Link href='/' >
                        <div className='h-[200px] w-full relative rounded-xl overflow-hidden'>
                            <Image
                                src="/images/projects/project-1.jpg" 
                                blurDataURL="/images/projects/project-1.jpg"
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

                        <Link href='/' target='_blank' className='hover:text-sky-400 transition-all duration-300 hover:scale-110 text-2xl' >
                            <HiOutlineExternalLink />     
                        </Link>

                        <Link href='/' target='_blank' className='hover:text-sky-400 transition-all duration-300 hover:scale-110 text-[1.2rem]' > 
                            <FiGithub />     
                        </Link>

                    </div>
                </div>


                <h1 className='text-xl font-medium mb-1 text-slate-200' > Hello world BD </h1>
                <p className='text-slate-400' > asdf asfffff asf asdf asdfdsa asfd asdf asdf asfffff asf asdf asdfdsa asfd asdf  </p>  

                <div className='flex text-slate-300 mt-7 gap-x-4 flex-wrap' >
                    <span> react js </span> 
                    <span> next js </span> 
                    <span> framer motion </span> 
                </div>

            </div>
        </div>     
  )
}

export default ProjectCard