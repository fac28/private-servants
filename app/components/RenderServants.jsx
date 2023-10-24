
import Image from 'next/image'
import { listServants } from '../../lib/model.js';

export default function RenderServants() {
    const all_servants = listServants();
    return (<ul>
        {all_servants.map((servant) => (
            < li key = { servant.id } >
                <h1>{servant.name}</h1>
                <Image
                src={servant.profile_img}
                alt="Servant Profile Picture"
                width={100}
                height={100}
                priority
            />
                <p>Price: £{servant.base_price}</p>
            </li>
        ))}
    </ul>
    )
    console.log(servant.name)
}
