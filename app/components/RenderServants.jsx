import Image from 'next/image'
import { listServants } from '../../lib/model.js'

export default function RenderServants() {
  const all_servants = listServants()
  return (
    <ul className="flex flex-col items-center">
      {all_servants.map((servant) => (
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
  console.log(servant.name)
}
