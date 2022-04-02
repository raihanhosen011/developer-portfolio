import styled from "styled-components"

import { StyledIcon, StyledSmallIcon } from "@components/shared/Icon/icon.styled";
import StyledContainer from "@components/shared/Container/container.styled";


export const ProjectContainer = styled(StyledContainer)``

export const ProjectWrapper = styled.div`
  h3.project-text {
    font-weight: 300;
    font-size: var(--normal-font-size);
    width: 55%;
    text-align: center;
    margin: auto;
    margin-bottom : var(--mb-1-5);
  }

  @media (max-width: 900px){
    h3.project-text{
      width: 100%;  
    }  
  }
`

export const FeaturedProject = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: var(--mb-1);

  @media (max-width: 768px){
    display: none;
  }
`

export const FeaturedLeft = styled.div`
  span{
    color: #7a7a7a;
  }
`

export const FeaturedRight = styled.div``

export const UsedLanguage = styled.div`
  margin-bottom: var(--mb-1);
  margin-top: var(--mb-1-5);
  display: flex;
  flex-wrap: wrap;
  gap: var(--mb-1);
`

export const SingleLanguage = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 5px;
  width: fit-content;
  cursor: pointer;

  ${StyledSmallIcon}{
    width: 16px;
    height: 16px;
  }
  .lang-name{
    margin-left: 5px;
    font-size: var(--small-font-size);
  }
`

export const FeaturedLeftBottom = styled.div`
  display: flex;
  align-items: center;
  gap: var(--mb-1);

  ${StyledIcon}{
    height: 32px;
    width: 32px;
  }
`

export const SingleProjectContainer = styled.div`
  background: var(--body-white);
  padding: 10px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
`

export const SingleProjectHead = styled.div`
  margin-bottom: var(--mb-0-5);

  div{
    border-radius: 7px;
  }
  button.react-multiple-carousel__arrow {
    background: white;
    min-width: 26px !important;
    min-height: 26px !important;
  }
  .react-multiple-carousel__arrow--right::before, .react-multiple-carousel__arrow--left::before {
    color: #4c4c4c !important;
    font-size: 12px !important;
    font-weight: bold !important;
  }

  ul{
    li{
      height: 230px;
      background: white;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`

export const SingleProjectBody = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;

  h4{
    font-weight: 400;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
`

export const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: var(--mb-0-5);
  padding-bottom: var(--mb-0-5);
`

export const ProjectButtons = styled.div`
  display: flex;
  align-items: flex-end;
  flex: auto;
  gap: 10px;
  justify-content: flex-end;

  a{
    display: flex;
    align-items: center;
    font-size: 13px;
    color: var(--title-color);
    gap: 5px;
    cursor: pointer;
    width: fit-content;
    background: var(--body-third);
    padding: 3px 10px;
    border-radius: 5px;

    svg{
      min-width: 17px;
      max-width: 17px;
    }
  }
  .demo{
    background: var(--first-color);
  }
`

export const NormalProjects = styled.div`
  margin: var(--mb-1-5) 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: var(--mb-1) var(--mb-0-5);

  @media (min-width: 1300px){
    grid-gap: var(--mb-1);
  }
`