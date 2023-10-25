import Image from 'next/image'

export default function RenderFiltered(props) {
  const max = props.max
  const all_servants = props.allServants
  return (
    <ul className="flex flex-wrap gap-3 justify-center">
      {all_servants
        .filter((servant) => servant.base_price <= max)
        .map((servant) => (
          <li className="card flex flex-col items-center" key={servant.id}>
            <h3>{servant.name}</h3>
            <Image
              src={servant.profile_img}
              alt="Servant Profile Picture"
              width={200}
              height={200}
              priority
            />
            <p>Price: £{servant.base_price}</p>
          </li>
        ))}
    </ul>
  )
}
