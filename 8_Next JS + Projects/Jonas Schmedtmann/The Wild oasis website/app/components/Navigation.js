import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div>
        <ul>
            <li>
                <Link href={"/about"}>About</Link>
            </li>
            <li>
                <Link href={"/account"}>Account</Link>
            </li>
            <li>
                <Link href={"/rooms"}>Rooms</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation