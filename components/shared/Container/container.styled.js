import styled from "styled-components";

const StyledContainer = styled.section.attrs(() => ({
   className : "section"
}))`
   max-width : 90%;
   margin : auto;
   padding-left: var(--mb-0-5);
   padding-right: var(--mb-0-5);
   position: relative;
   z-index: 1;
`

export default StyledContainer