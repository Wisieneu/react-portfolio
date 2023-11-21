// import { useEffect } from 'react'

import './index.scss'

export default function Background() {
  // useEffect(() => {
  //   const scriptVanta = document.createElement('script')
  //   scriptVanta.src = './scripts/vanta.topology.min.js'
  //   scriptVanta.type = 'text/javascript'
  //   scriptVanta.crossOrigin = 'anonymous'
  //   document.body.appendChild(scriptVanta)
  //   return () => {
  //     document.body.removeChild(scriptVanta)
  //   }
  // })

  return (
    <div className="background">
      <canvas />
    </div>
  )
}
