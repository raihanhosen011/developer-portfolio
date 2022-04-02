import Navigation from '../Navigation'
import Options from '../Options'

import { StyledLayer, SidebarBody, SidebarHead } from './layer.styled'

function Index(){
  return (
    <StyledLayer>
       <SidebarHead>
          <Options />
       </SidebarHead>

       <SidebarBody>
          <Navigation />
       </SidebarBody>
    </StyledLayer>
  )
}

export default Index