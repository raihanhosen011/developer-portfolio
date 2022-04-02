import styled from 'styled-components'
import StyledContainer from '../../shared/Container/container.styled'

export const ContactContainer = styled(StyledContainer)``

export const ContactWrapper = styled.div``

export const ContactContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--mb-1);
    position: relative;
    margin-top : var(--mb-2);

    @media (max-width: 900px){
      grid-template-columns: 1fr;
    }
`

export const ContactInformation = styled.div`
   h3{
      text-transform: uppercase !important;
      font-size: 26px;       
   } 
   p{
      line-height: 1.2;
      margin-bottom: var(--mb-1-5);
   }

   .icon-text{
      font-weight: 600;
      line-height: 25px;
      margin-bottom: 15px;
      position: relative;
      padding-left: 35px;

      span{
        text-transform: uppercase;
        opacity: .8;
        font-weight: 400;
        padding-bottom: 0;
        display: block;
      }
      svg{
        left: 0;
        top: 10px;
        font-size: 33px;
        color: var(--first-color);
        margin-right: 7px;
        position: absolute;
      }
    } 
   }

   @media (min-width: 900px){
      width: 72%;
   }
`

export const ContactForm = styled.form`
  input, textarea{
    display: block;
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    background: var(--body-white);
    color: var(--title-color);
    font-size: var(--normal-font-size);
  } 
  textarea{
    margin-bottom: 1.5rem;  
    min-height: 150px;
  }

  button{
    background: transparent;
    border: none;
  }
`