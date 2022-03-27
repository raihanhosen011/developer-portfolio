import Script from 'next/script'
import './swillow.js'

export default function Canvas() {
  return (
    <>
      <canvas className="c"></canvas>
     
      <Script src="jquery-1.9.1.min.js" />
      <Script src="TweenMax.min.js" />
    </>
  )
}