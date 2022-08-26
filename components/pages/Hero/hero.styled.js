import styled from "styled-components";
import StyledContainer from '../../shared/Container/container.styled'

export const HeroContainer = styled(StyledContainer)``

export const HeroWrapper = styled.div`
  min-height: 100vh;
  display : grid;
  grid-template-columns: 1fr 2fr;
  
  @media (min-width: 1000px){
    overflow: hidden;
    height: 100vh;
  }
`

export const HeroLeft = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    grid-column: 3/3
  }
`

export const HeroRight = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {grid-column: 3/3}
`


export const HeroImage = styled.div`
  width: 380px;
  height: 380px;
  border: 5px solid #424242;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  span{
    height: 100% !important;
    width: 100% !important;
  }

  @media (max-width: 768px){ 
    width: 300px;
    height: 300px;
    margin: auto;
    border-radius: 50%;
    margin-bottom: 11px;
    border: 5px solid #424242;
  }
`

export const HeroContent = styled.div`
  width: 600px;
  margin-left: 30px;

  p{
    margin: 22px 0;
    margin-right: 25px;
    line-height: 28px;
  }
  h1{
    margin-bottom: -9px;
    font-size: var(--mb-2-5);
    text-transform: uppercase;

    .hero-name{
      color: transparent;
      -webkit-text-stroke: 1px var(--first-color);
      font-size: var(--mb-3);
      -webkit-background-clip: text;
      background-position: 0 0;
      background-size: cover;
      animation : back 45s linear infinite;

      @keyframes back{
        100%{
          background-position: 2000px 0;
        }
      }
    }
  }
  h2{
    text-transform: uppercase;
    font-size: var(--mb-2);
    margin-bottom: -9px;
  }

  @media (max-width: 1000px) {width: 88%;}
  @media (max-width: 800px) {
    width: 92%;
    
    h1{
      font-size: var(--mb-2);
      
      .hero-name{
        font-size: var(--mb-2);
      }
    }
    h2{
      font-size: var(--mb-1-5);
    }
  }
`

export const HeroShape = styled.div`
  position: fixed;
  height: 200%;
  width: 100%;
  -webkit-transform: rotate(-15deg);
  -ms-transform: rotate(-15deg);
  transform: rotate(-22deg);
  left: -80%;
  top: -50%;
  background: linear-gradient(128deg,var(--first-color), transparent);
  z-index: -1;

  @media (max-width: 768px){
    display: none;
  }
`
