import styled from "styled-components";
import StyledContainer from "@components/shared/Container/container.styled";

export const SkillContainer = styled(StyledContainer)``

export const SkillWrapper = styled.div``

export const SkillSection = styled.div`
    background: var(--body-white);
    padding: var(--mb-1);
    border-radius: 9px;
    margin: 20px 0 30px;

    h2{
        font-weight: 500;
    }
`

export const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: var(--body-third);
    border-radius: 7px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    span{
        width: 35px !important
    }
    h3{
        font-weight: 400;
        font-size: var(--normal-font-size);
        margin-top: 4px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;  
    }
`

export const SkillItemWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
   grid-gap: 15px;   
   margin-top: var(--mb-1);
`