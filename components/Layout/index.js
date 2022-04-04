import { useSelector } from 'react-redux'

import Layer from './Layer'
import HomeMeta from '@components/meta/HomeMeta'

export default function Index({ children }) {
  return (
    <>               
      <HomeMeta />
        {children}  
      <Layer />
    </>
  )
}