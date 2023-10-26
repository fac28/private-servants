import Image from 'next/image'
import Link from 'next/link'

export default function RenderFiltered({ max, allServants, modifier }) {
  return (
    <ul className="flex flex-wrap gap-12 justify-center">
      {allServants
        .filter((servant) => servant.base_price * modifier <= max)
        .map((servant) => (
          <Link key={servant.id} href={`/listings/${servant.id}`}>
            <li className="card flex flex-col items-center" key={servant.id}>
              <h3>{servant.name}</h3>
              <Image
                src={servant.profile_img}
                alt="Servant Profile Picture"
                width={200}
                height={200}
                priority
              />
              <p>Price: £{(servant.base_price * modifier).toFixed(2)}</p>
            </li>
          </Link>
        ))}
    </ul>
  )
}
