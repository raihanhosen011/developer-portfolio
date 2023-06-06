import React from 'react'
//
import Button from '@components/Button'


const GetInTouch = () => {
  
  const content = ' Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!'
  
  return (
    <section id='contact' className='text-center my-4' >
        
        <h1 className='flex items-center gap-2 text-md justify-center font-normal text-sky-400' > 
          <span className=' font-mono' >05. </span>
          What next?
        </h1> 

        <h1 className='font-medium text-slate-300 text-4xl text-center mt-5' > Get In Touch </h1>

        <p className='text-slate-400 max-w-[500px] mx-auto my-3 mb-10' >
          {content}
        </p>

        <Button href='mailto:raihanhosen011@gmail.com' outlined > Say Hello 👋  </Button>

    </section>
  )
}

export default GetInTouch