
import Image from 'next/image'
import { listServants } from '../../lib/model.js';

// console.log(all_servants);

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


// export default function ListDishes({ max, category }) {
//   return (
//     <ul className="grid">
//       {dishes
//         .filter((dish) => dish.price <= max)
//         .filter((dish) => dish.category === category || category === "all")
//         .map((dish) => (
//           <li key={dish.id} className="card">
//             <h3>{dish.name}</h3>
//             {dish.description && <p>{dish.description}</p>}
//             <div>£{dish.price.toFixed(2)}</div>
//           </li>
//         ))}
//     </ul>
//   );
// }
