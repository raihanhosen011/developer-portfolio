import Link from 'next/link'

import { Nav, NavItem } from './nav.styled'
import { HoverIconBtn } from '@components/shared/Icon'
import icons from '@utils/IconsUtil'

function Index({ navData }) {
  return (
    <Nav>
       <ul>
          {Object.entries(navData).map(([ key, text ]) => 
            <Link href={`#${key}`} >
              <NavItem key={key} >
                <HoverIconBtn icon={icons[key]} caption={text} />
              </NavItem>               
            </Link>
          )}
       </ul> 
    </Nav>
  )
}

export default Index