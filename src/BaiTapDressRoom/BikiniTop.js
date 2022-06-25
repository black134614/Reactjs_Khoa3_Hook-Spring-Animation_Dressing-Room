import React, { memo } from 'react'

function BikiniTop(props) {
    return (
        <div className="bikinitop" style={{ width: 500, height: 500, background: `url(${props.topclothes})`, position: 'absolute', top: '-9%', left: '-5%', zIndex: 3, transform: 'scale(0.5)' }} />
    )
}

export default memo(BikiniTop)