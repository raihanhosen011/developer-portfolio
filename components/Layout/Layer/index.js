import Navigation from '../Navigation'
import Options from '../Options'

import { StyledLayer, SidebarBody, SidebarHead, SidebarFooter } from './layer.styled'

function Index({ navData, social }) {
  return (
    <StyledLayer>
       <SidebarHead>
          <Options />
       </SidebarHead>

       <SidebarBody>
          <Navigation navData={navData} />
       </SidebarBody>
    </StyledLayer>
  )
}

export default Index