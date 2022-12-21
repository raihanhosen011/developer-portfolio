import React from 'react'
//
import Content from './partials/Content'

const About = () => {
  return (
    <section>
      
      <h1 className='flex items-center gap-2 text-3xl font-medium text-slate-300' > 
        <span className='text-sky-400 font-mono' >02. </span>
        Where I've worked?
      </h1>

      <div className='mt-14' >
        <Content /> 
      </div>

    </section>
  )
}

export default About