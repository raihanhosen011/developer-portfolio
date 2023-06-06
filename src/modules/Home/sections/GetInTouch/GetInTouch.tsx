import React from 'react'
//
import Button from '@components/Button'


const GetInTouch = () => {

  const desc = `Even though I'm not actively seeking new opportunities at the moment, I'm always happy to connect. Whether you have a question, want to discuss a potential collaboration, or simply want to say hello, feel free to reach out. I'll do my best to respond promptly and engage in meaningful conversations!`

  return (
    <section id='contact' className='text-center my-4' >
        
        <h1 className='flex items-center gap-2 text-md justify-center font-normal text-sky-400' > 
          <span className=' font-mono' >05. </span>
          What next?
        </h1> 

        <h1 className='font-medium text-slate-300 text-4xl text-center mt-5' > Get In Touch </h1>

        <p className='text-slate-400 max-w-[500px] mx-auto my-3 mb-10' > {desc} </p>

        <Button href='mailto:raihanhosen011@gmail.com' outlined > Say Hello 👋 </Button>

    </section>
  )
}

export default GetInTouch