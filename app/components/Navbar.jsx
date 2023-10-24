import Link from 'next/link'
export default function Navbar() {
  return (
    <nav>
      <Link className="text-3xl font-semibold" href="/">
        Private Servants
      </Link>
      <div className="flex justify-around gap-5">
        <Link className="text-2xl font-semibold" href="/listings">
          All
        </Link>
        <Link className="text-2xl font-semibold" href="/checkout">
          Checkout
        </Link>
      </div>
    </nav>
  )
}
