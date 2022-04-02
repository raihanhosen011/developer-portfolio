import styled from "styled-components";
import StyledContainer from "@components/shared/Container/container.styled";

export const TestmonialContainer = styled(StyledContainer)``

export const TestmonialWrapper = styled.div``

export const TestmonialContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: var(--mb-1);
    min-height: 45vh;
    position: relative;
    
    .testmonial-object {
      display: none;
    }

    @media (max-width: 900px){
       grid-template-columns: 1fr;
    }

    @media (min-width: 900px){
      background: var(--body-white);
      border-radius: 9px;
      min-height: 80vh;
      border: 1px solid #3D4752;

      .testmonial-object {
        display: block;
        position: absolute;
        max-width: 130px;
        top: -52px;
        left: -30px;
      }
    }
`

export const TestmonialTexts = styled.div`
  padding: var(--mb-1);
  border-right: 2px solid var( --first-color);
`

export const TextsHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: end;
    line-height: 1.3;
    gap: 10px;
    margin-bottom: var(--mb-1);
`

export const TextsBody = styled.div`
  p{
    text-align: right;  
  }  
`

export const TestmonialClients = styled.div`
  margin-top: 20px; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(106px, 1fr));
  grid-gap: 0.7rem;
  justify-items: center;
  padding: 0 65px;

  .active {
    transform: scale(1.2);
    opacity: 1;

    img{
      -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
    }
  }

  @media (max-width: 768px){
    padding: 0 40px;
  }
`

export const ClientDetails = styled.div`
  h4{
    text-transform: capitalize;
    font-weight: 500;  
  }  
  p{
    font-size: var(--small-font-size);
  }
`

export const StyledClientSlug = styled.div`
  padding: 10px 15px;
  background: var(--body-third);
  border-radius: 7px;
  cursor: pointer;
  opacity: 0.4;
  transition: .4s;

  span{
    width: 78px !important;

    img{
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
      object-fit: contain;
    }
  }
`