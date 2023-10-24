import Link from 'next/link'
export default function Navbar() {
  return (
    <nav
      className="p-4 
    border-b-2 border-gray-200
    flex items-center justify-between gap-5 
    my-10 mx-auto 
    max-w-5xl;"
    >
      <Link className="text-3xl font-semibold" href="/">
        Private Servants
      </Link>
      <div className="flex justify-around gap-5">
        <Link className="text-2xl font-semibold" href="/listings">
          Listings{' '}
        </Link>
        <Link className="text-2xl font-semibold" href="/checkout">
          Checkout
        </Link>
      </div>
    </nav>
  )
}
