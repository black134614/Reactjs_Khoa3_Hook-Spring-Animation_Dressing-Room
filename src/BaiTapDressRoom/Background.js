import React, { memo } from 'react'

function Background(props) {
    return (
        <div className="background" style={{ backgroundImage: `url(${props.background})` }} >
        </div>
    )
}

export default memo(Background)