import styled from "styled-components";

export const Socials = styled.div`
   display: flex;
   align-items: center; 
   margin-top: 15px;
`

export const SocialWrapper = styled.a`
   width: 27px;
   height: 27px;
   cursor: pointer;
   overflow: hidden;
   border-radius: 50%;
   margin-right: 10px;
   padding: 4px;

   img{
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      transition: .4s;
   }
   
   &:hover img{
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
   }
`