import styled from "styled-components";

export const StyledIcon = styled.div`
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--body-white);
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    transition: .4s;

    svg{
      width: 19px;  
    }
    span{
      width: 100% !important;
      height: 100% !important;
    }

    &:hover{
      background : var(--first-color) !important;
      color : white;  
    }
`

export const StyledCaptionIcon = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid var(--first-color);
  border-radius: 25px;
  padding: 0 0 0 14px;
  transition: all .5s;
  cursor: pointer;
  position: relative;
  overflow: hidden;  
  transition: all .5s;
 
  span{
    margin-right: 10px;
    text-transform: uppercase;
  }

  &:before{
      height: 100%;
      width: 100%;
      content: '';
      margin: auto;
      position: absolute;
      top:  0;
      bottom: 0;
      right: 0;
      background: var(--first-color);
      transition: all .5s;
      z-index: -1;
      transform: scaleX(0);
      transform-origin: right;
  }

  &:hover{
    &:before{
      transform: scaleX(1);
    }
    color: white;
  }

  ${StyledIcon}{
    background: var(--first-color);
    color: white;
  }
`

export const StyledHoverIcon = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 25px;
  transition: all .5s;
  cursor: pointer;
  position: relative;
  width: 39px;
  height: 39px;
  transition: all .3s;
  
  h4{
    margin-right: 10px;
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    color: #fff;
    line-height: 41px;
    font-weight: 500;
    -webkit-transition: all .3s;
    transition: all .3s;
    border-radius: 30px;
    text-transform: uppercase;
    padding: 0 28px 0 8px;
    font-size: 14px;
    height: 39px;
    margin: 0;
    background: var(--first-color);
    transform: scaleX(.4);
    transform-origin: right;
  }

  &:hover{
    h4{
      opacity: 1;
      padding: 0px 47px 0px 15px;
      transform: scaleX(1);
    }
  }
`