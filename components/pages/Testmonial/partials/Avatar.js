import { StyledAvatar } from '@components/shared/Global/global.style'
import React from 'react'

function Avatar({ src }) {
  return (
    <>
      <StyledAvatar className='skeleton' >
          <img src={`/images/avatar/${src}.png`} />
      </StyledAvatar>
    </>
  )
}

export default Avatar