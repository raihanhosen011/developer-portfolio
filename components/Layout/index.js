import Layer from './Layer'

export default function Index({ children }) {
  return (
    <>               
      {/* <HomeMeta homeMetaData={homeMetaData} /> */}
        {children}  
      <Layer />
    </>
  )
}