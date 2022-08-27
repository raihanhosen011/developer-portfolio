import { UilArrow, UilDesktop  } from '@iconscout/react-unicons'
import Image from 'next/image'

import Lang from './Lang'
import { CaptionIconBtn } from '@components/shared/Icon'
import { FeaturedProject, FeaturedLeft, FeaturedRight, UsedLanguage, FeaturedLeftBottom } from '../projects.styled'

function FeaturedProjects({ title, desc, image, tools, demo, code }) {
  return (
        <FeaturedProject>
            <FeaturedLeft> 
                <span> Featured project </span>
                <h2> {title} </h2>
                <p> {desc} </p>  

                <UsedLanguage> 
                   {tools.map(({ name, icon }, index) =>  <Lang key={index} name={name} icon={icon} />)}
                </UsedLanguage>

                <FeaturedLeftBottom>
                   <a href={code} target='_blank' rel="noreferrer" ><CaptionIconBtn icon={<UilArrow />} caption='Code' /></a>
                   <a href={demo} target='_blank' rel="noreferrer" ><CaptionIconBtn icon={<UilDesktop />} caption='Live demo' /></a>
                </FeaturedLeftBottom>
            </FeaturedLeft>

            <FeaturedRight> 
                <Image src={`/images/mockup/${image}.png`} width={1} height={0.7} alt='Feture img' layout='responsive' />
            </FeaturedRight>
        </FeaturedProject>
  )
}

export default FeaturedProjects