import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link
        className="text-3xl font-semibold flex items-center p-2 gap-1"
        href="/"
      >
        Private Servants
      </Link>
      <div className="flex justify-around items-center gap-5">
        <Link className="text-2xl font-semibold" href="/listings">
          All
        </Link>
        <Link href="/cart">
          <FontAwesomeIcon icon={faCartShopping} width={25} height={25} />
        </Link>
      </div>
    </nav>
  )
}
