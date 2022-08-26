import styled from "styled-components";
import StyledContainer from "@components/shared/Container/container.styled";

export const AboutContainer = styled(StyledContainer)``

export const AboutWrapper = styled.div`
`

export const AboutDescription = styled.div`
   display: grid;
   grid-template-columns: 2fr 1fr;

   p{
      margin-right: 15px;
   }
   h2{
      padding-left: 10px;
      border-left: 1px solid var(--first-color-alt);
      color: var(--first-color-alt);
      font-weight: 400;
      height: fit-content;
   }

   @media (max-width: 900px){
      grid-template-columns: 1fr;

      h2{
        margin-top: 15px;  
      }
   }
`

export const PersonalInfo = styled.div`
  h2{
    margin-bottom: 8px;
    text-transform: uppercase;
    font-size: var(--h2-font-size);   
    color: var(--first-color-alt); 
    position: relative;  
          
      @media (min-width: 1000px){
         &:after{
            content: "";
            margin-left: 12px;
            position: absolute;
            z-index: 100;
            background: var(--first-color);
            width: 225px;
            height: 1px;
            top: 18px;
         }
      }
  } 

  .title{
     text-transform: capitalize;
  }
  .value{
    text-transform: capitalize;
    font-weight: 500;
    color: var(--title-color); 
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: var(--mb-1);

    li{
      flex: 0 0 50%;
      max-width: 50%;
      margin-bottom: 5px;
    }
  }
`

export const ExperienceCount = styled.div`
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   display: grid;
   grid-gap: 20px;
   
   @media (min-width: 800px){
      margin-right: var(--mb-2-5);
   }
`

export const CountColumn = styled.div`
   padding: 20px;
   background: var(--body-white);
   border-radius: 7px;

   h1{
      color: var(--first-color-alt);   
      position: relative;
      display: inline-block;
      margin: 0;
      font-size: var(--h1-font-size);
      font-weight: 700;

      &:after{
         content: "+";
         position: absolute;
         right: -28px;
         font-size: 33px;
         font-weight: 300;
         top: 2px;
      }
   }

   p{
      position: relative;
      padding-left: 45px;
      text-transform: uppercase;
      color: var(--title-color);
      width: 190px;
      line-height: 1.4;
      
      &:before{
         content: "";
         position: absolute;
         left: 0;
         top: 13px;
         width: 30px;
         height: 1px;
         background: #777;
      }
   }

   @media (max-width: 800px){
      margin-top: 7px;
   }
`

export const AboutRow = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin: var(--mb-2-5) 0;

   @media (max-width: 800px){
      grid-template-columns : 1fr;
   }
`