import Link from "next/link"
export default function Navbar() {
    return (
      <nav>
        <h1 className="text-4xl font-bold from-neutral-600" >Private Servants</h1>
        <Link href="/">Home </Link>
        <Link href="/listings">Listings </Link>
      </nav>
    )
  }
  