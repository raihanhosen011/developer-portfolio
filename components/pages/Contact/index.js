import React from 'react'
import emailjs from 'emailjs-com'
import { UilMap, UilEnvelopeCheck, UilPhoneVolume, UilMessage } from '@iconscout/react-unicons'

import { fadeInUp } from '@components/animations'
import { motion } from 'framer-motion'

import { SectionTitle } from '@components/shared/Global/global.style'
import { ContactContainer, ContactContent, ContactForm, ContactInformation, ContactWrapper } from './contact.styled'
import { CaptionIconBtn } from '@components/shared/Icon'
import withTransition from '@components/animations/withTransition'

function Index() {

  function sendEmail(e){
      e.preventDefault()

      emailjs.sendForm('service_nuzxzdb', 'template_6c4mw7w', e.target, 'LgCMbndsfm9wPoOgO')
      .then(() => {
          alert("Your message has been successfully sent to Raihan Hosen.")
          location.replace('/')
      })
      .catch(() => alert("Email not sent! please try again."))
  }

  return (
    <ContactContainer>
       <ContactWrapper as={motion.div} {...fadeInUp} >

            <SectionTitle>
               <h1> get in touch </h1>
               <span className='title-bg' > contact </span>
            </SectionTitle>

            <ContactContent>
                <ContactInformation>
                   <h3>DON&apos;T BE SHY !</h3>  
                   <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                   <p className='icon-text' >
                     <UilMap />
                     <span>ADDRESS POINT</span>  
                     123 Stree New York City , United States Of America 750065.          
                   </p> 

                   <p className='icon-text' >
                     <UilEnvelopeCheck />
                     <span>MAIL ME</span>  
                     raihanhosen011@gmail.com         
                   </p> 

                   <p className='icon-text' >
                     <UilPhoneVolume />
                     <span>CALL ME</span>  
                     +216 21 184 010      
                   </p> 
                </ContactInformation>

                <ContactForm onSubmit={sendEmail} >
                   <input name='name' type="text" placeholder='ENTER YOUR NAME' required /> 
                   <input name='user_email' type="email" placeholder='ENTER YOUR EMAIL' required /> 
                   <input name='subject' type="text" placeholder='ENTER YOUR SUBJECT' required />
                   <textarea name='message' placeholder='ENTER YOUR MESSAGE' required />

                   <button type='submit' ><CaptionIconBtn icon={<UilMessage />} caption='send message' /> </button> 
                </ContactForm> 
            </ContactContent>

       </ContactWrapper> 
    </ContactContainer>
  )
}

export default withTransition(Index) 