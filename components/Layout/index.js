import Layer from './Layer'
import Canvas from './Canvas'

export default function Index({ navData, social, children }) {

  return (
    <>
      <Canvas />
      {children}
      <Layer navData={navData} social={social} />
    </>
  )
}