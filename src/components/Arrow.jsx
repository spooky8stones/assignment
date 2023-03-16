import React from 'react'

export default function Arrow({width, height, fill, rotate}) {
  return (
    <div className='arrow' style={rotate}>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 520" width={width} height={height}>
  <polygon points="300,0 600,520 0,520" fill={fill}/>
</svg>
</div>
  )
}
