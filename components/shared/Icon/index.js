import Image from 'next/image'
import Link from 'next/link'

import { StyledIcon, StyledCaptionIcon, StyledHoverIcon } from './icon.styled'


const Img = ({ source, alt }) => {
  return <Image src={`/icons/${source}`} width={1} height={1} layout='responsive' alt={alt} />
}


export const Icon = ({ icon, src, alt, ...props }) => {
  return (
    <StyledIcon {...props} >
       {icon ? icon : <Img source={src} alt={alt} />}
    </StyledIcon>
  )  
}


export const CaptionIconBtn = ({ icon, src, alt, caption, to, ...props }) => {
  let remidi = (
    <StyledCaptionIcon {...props} >  
       <span>{ caption }</span> 
       <Icon icon={icon} src={src} alt={alt} />
    </StyledCaptionIcon>
  ) 

  if(!to){
    return remidi  
  }else{
    return (
      <Link href={to} >
         {remidi} 
      </Link>  
    )  
  }
}


export const HoverIconBtn = ({ icon, src, alt, caption, to, ...props }) => {
  let remidi = (
    <StyledHoverIcon {...props} >
       <Icon icon={icon} src={src} alt={alt} />  
       <h4>{ caption }</h4> 
    </StyledHoverIcon>
  ) 

  if(!to){
    return remidi  
  }else{
    return (
      <Link href={to} >
         {remidi} 
      </Link>  
    )  
  }
}