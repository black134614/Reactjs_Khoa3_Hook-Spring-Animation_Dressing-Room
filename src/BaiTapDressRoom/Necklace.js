import React, { memo } from 'react'

function necklace(props) {
  return (
    <div className="necklace" style={{ width: 500, height: 1000, background: `url(${props.necklaces})`, position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 4 }} />
  )
}
export default memo(necklace);