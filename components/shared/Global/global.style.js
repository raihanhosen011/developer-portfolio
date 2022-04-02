import styled from "styled-components";

export const SectionTitle = styled.div`
    padding-top: var(--mb-1);
    padding-bottom: var(--mb-1);
    text-align: center;
    position: relative;

    h1 {
        font-size: var(--h1-font-size);
        text-transform: uppercase;
    }
    span.title-bg {
        font-size: 3.9rem;
        text-transform: uppercase;
        font-weight: 700;
        opacity: .2;
        position: absolute;
        transform: translateX(-50%);
        letter-spacing: 10px;
        top: 0;
    }

    @media (max-width: 900px){
        span.title-bg {
            font-size: 3rem;
        }
    }
`

export const StyledAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;  
  }  
`