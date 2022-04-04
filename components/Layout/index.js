import { useSelector } from 'react-redux'

import Layer from './Layer'
import HomeMeta from '@components/meta/HomeMeta'

export default function Index({ children }) {
  const { data } = useSelector(state => state)
  const { homeMetaData } = data

  return (
    <>               
      <HomeMeta homeMetaData={homeMetaData} />
        {children}  
      <Layer />
    </>
  )
}