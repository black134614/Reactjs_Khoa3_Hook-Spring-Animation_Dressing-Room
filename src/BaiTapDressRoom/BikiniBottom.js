import React, { memo } from 'react'

 function BikiniBottom(props) {
  return (
    <div className="bikinibottom" style={{ width: 500, height: 1000, background: `url(${props.botclothes})`, position: 'absolute', top: '-30%', left: '-5%', zIndex: 2, transform: 'scale(0.5)' }} />

  )
}

export default memo(BikiniBottom);