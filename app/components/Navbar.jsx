import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import CartSummary from './CartSummary'

export default function Navbar() {
  return (
    <nav>
      <Link className="text-3xl font-semibold flex items-center" href="/">
        Private Servants
      </Link>
      <div className="flex justify-around items-center gap-5">
        <Link className="text-2xl font-semibold" href="/listings">
          All
        </Link>
        <Link href="/cart">
          <div className="flex gap-1 ">
            <FontAwesomeIcon icon={faCartShopping} width={25} height={25} />
            <CartSummary />
          </div>
        </Link>
      </div>
    </nav>
  )
}
