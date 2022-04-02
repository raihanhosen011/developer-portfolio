import styled from 'styled-components'
import StyledContainer from '../../shared/Container/container.styled'

export const PartnerContainer = styled(StyledContainer)``

export const PartnerWrapper = styled.div``

export const PartnerConent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: var(--mb-1);
    min-height: 45vh;

    @media (max-width: 900px){
       grid-template-columns: 1fr;
    }
`

export const PartnerTexts = styled.div`
   text-align: end;

  @media (max-width: 900px){
    text-align: center;
  }
`

export const PartnerLogos = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
`

export const SinglePartnerStyle = styled.a`
    display: block;
    max-width: 135px;
    padding: 10px;

    img{
       width: 100%;
       height: 100%;
       object-fit: contain;
    }
`