import Image from 'next/image'

import { StyledItem } from "../skill.styled"

function SkillItem({ name, icon }) {
  return (
    <StyledItem>
       <Image src={`/images/skills/${icon}.png`} width={1} height={1} alt='skill item img' layout='responsive' />
       <h3> {name} </h3>                                                                                                                                                                                                                                                                                                                                            
    </StyledItem>
  )
}

export default SkillItem