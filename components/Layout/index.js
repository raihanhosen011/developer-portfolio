import Layer from './Layer'
import HomeMeta from '@components/meta/HomeMeta'

export default function Index({ children }) {
  return (
    <>               
      <HomeMeta homeMetaData={homeMetaData} />
      {children}  
      <Layer />
    </>
  )
}