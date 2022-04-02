import React from 'react'
import { StyledClientSlug } from '../testmonial.styled'

function ClientSlug({ src, customClass, click }) {
  return (
    <StyledClientSlug className={customClass} onClick={click} >
       <img src={`/images/partner/${src}.png`} alt='client slug image' /> 
    </StyledClientSlug>
  )
}

export default ClientSlug