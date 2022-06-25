import React, { memo } from 'react'

function Feet(props) {
  return (
    <div className="feet" style={{ width: 500, height: 1000, background: `url(${props.shoes})`, position: 'absolute', bottom: '-37%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 1 }} />
  )
}

export default memo(Feet)