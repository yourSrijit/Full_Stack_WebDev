import Link from 'next/link'
import React from 'react'

function MenuItem({title,address,Icon}) {
  return (
    <div>
       <link href={address}>
       <Icon/>
       <p>{title}</p>
       </link>
    </div>
  )
}

export default MenuItem