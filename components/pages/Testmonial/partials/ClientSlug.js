import React from 'react'
import Image from 'next/image'

import { StyledClientSlug } from '../testmonial.styled'

function ClientSlug({ companyImg, click, customClass }) {
  return (
    <StyledClientSlug className={customClass} onClick={click} >
       <Image src={`/images/partner/${companyImg}.png`} width={1} height={1} layout='responsive' alt='client slug image' /> 
    </StyledClientSlug>
  )
}

export default ClientSlug