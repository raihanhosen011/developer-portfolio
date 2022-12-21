import React from 'react'
//
import Left from './partials/Left'
import Right from './partials/Right'

const About = () => {
  return (
    <section>
      
      <h1 className='flex items-center gap-2 text-3xl font-medium text-slate-300' > 
        <span className='text-sky-400 font-mono' >01. </span>
        About me 
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-20' >
        <Left />
        <Right /> 
      </div>

    </section>
  )
}

export default About