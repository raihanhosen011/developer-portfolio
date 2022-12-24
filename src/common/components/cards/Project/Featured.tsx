import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
//
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
//
import { cx } from '@config/constants'
import { ProjectTypes } from '@config/types'


const Featured = ({ secondary, live, thumnail, code, title, description, tech } : ProjectTypes) => {
  
  const __renderImage = () => {
     return (
        <div className='col-span-7 relative hidden sm:block' >
            <Link href={`${live}`} >
                <div className='h-[350px] w-full relative rounded-xl overflow-hidden'>
                    <Image 
                        src={`/images/projects/${thumnail}`} 
                        blurDataURL={`/images/projects/${thumnail}`} 
                        className='transition-all duration-300 group-hover:scale-110 group-hover:rotate-3'
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                        alt='loading...' 
                    />

                    <div className='absolute top-0 bottom-0 left-0 right-0 bg-sky-900/50 transition-all duration-300 cursor-pointer hover:opacity-0' />           
                </div>  
            </Link>
        </div>
     )
  }


  const __renderContent = () => {
    return (
        <div className={cx('col-span-12 sm:col-span-5 text-right sm:absolute sm:left-[50%]', secondary && '!relative z-[100] !left-0 !text-start sm:w-[120%]')} >
            <div>
                <p className='text-sky-400' > Featured </p>
                <h1 className='text-3xl font-medium text-slate-300' > {title} </h1>

                <div className='my-6 p-6 bg-slate-800 text-slate-300 shadow-xl rounded-xl' >
                    <p> {description && description} </p>
                </div>

                <div className={cx('flex text-slate-400 ml-[8rem] gap-x-4 justify-end flex-wrap', secondary && '!justify-start ml-0 mr-[8rem]')} >
                    {tech.map((e: string, i: number) => <span key={i} >{e}</span>)}
                </div>

                <div className={cx('flex justify-end mt-5 gap-3 text-slate-300', secondary && '!justify-start')} >

                    {live && <Link href={`${live}`} target='_blank' className='hover:text-sky-400 transition-all duration-300 hover:scale-110 text-2xl' >
                        <HiOutlineExternalLink />     
                    </Link>}

                    {code && <Link href={`${code}`} target='_blank' className='hover:text-sky-400 transition-all duration-300 hover:scale-90 text-[1.2rem]' > 
                        <FiGithub />     
                    </Link>}

                </div>
            </div> 
        </div>
    )
  }


  return (
    <div className='relative grid grid-cols-12 items-center gap-3 group' >
       {secondary ? 
          <>
            {__renderContent()}
            {__renderImage()}
          </>  

          :

          <>
            {__renderImage()}
            {__renderContent()}
          </>  
       }
    </div>
  )
}

export default Featured