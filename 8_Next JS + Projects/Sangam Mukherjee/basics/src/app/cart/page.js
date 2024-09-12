"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

function page() {
    const pathName=usePathname();

  return (
    <div>This is Cart Component</div>
  )
}

export default page