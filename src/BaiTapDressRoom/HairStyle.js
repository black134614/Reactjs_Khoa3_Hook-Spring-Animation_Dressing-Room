import React, { memo } from 'react';

function hairStyle(props) {
    return (
        <div className="hairstyle" style={{
            width: 1000, background: `url(${props.hairstyle})`, height: 1000, position: 'absolute', top: '-75%', right: '-57%', transform: 'scale(0.15)', zIndex: 4
        }}>
        </div >

    )
}

export default memo(hairStyle)

