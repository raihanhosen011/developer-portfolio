import React from 'react'
import Image from 'next/image'

import { StyledAvatar } from '@components/shared/Global/global.style'

function Avatar({ src }) {
  return (
    <>
      <StyledAvatar className='skeleton' >
          <Image src={`/images/avatar/${src}.png`} width={1} height={1} layout='responsive' alt='Avatar' />
      </StyledAvatar>
    </>
  )
}

export default Avatar