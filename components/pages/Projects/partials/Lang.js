import React from 'react'

import { SmallIcon } from '@components/shared/Icon'
import { SingleLanguage } from '../projects.styled'

function Lang({ name, icon }) {
  return (
    <SingleLanguage className={icon} >
        <SmallIcon src={`language/${icon}.png`} />
        <span className='lang-name' > {name} </span>
    </SingleLanguage> 
  )
}

export default Lang