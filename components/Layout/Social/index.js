import Image from 'next/image'
import { SocialWrapper, Socials } from './social.styled'

function Index({ social }) {
  return (
    <>
      <Socials>
          {social.map(({ icon, href }) => 
            <SocialWrapper key={icon} href={href} target='_blank' >
              <Image src={`/icons/social/${icon}.png`} width={1} height={1} layout='responsive' alt={icon} className='social-img' />
            </SocialWrapper>           
          )}
      </Socials>
    </>
  )
}

export default Index