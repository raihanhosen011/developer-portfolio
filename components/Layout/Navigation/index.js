import Link from 'next/link'
import { useSelector } from 'react-redux'

import { Nav, NavItem } from './nav.styled'
import { HoverIconBtn } from '@components/shared/Icon'
import icons from '@utils/IconsUtil'

function Index() {
  const { data } = useSelector(state => state) 

  return (
    <Nav>
       <ul>
          {data.navdata && Object.entries(data.navdata).map(([ key, text ]) => 
             <NavItem key={key} >
                <Link href={`/${key == 'home' ? '/' : key}`} passHref> 
                   <HoverIconBtn icon={icons[key]} caption={text} />                
                </Link>
             </NavItem>    
          )}
       </ul> 
    </Nav>
  )
}

export default Index