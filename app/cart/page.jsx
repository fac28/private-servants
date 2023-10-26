'use client'
import Test from '../components/Test'
import ContactForm from '../components/ContactForm'
import { useBasket } from '../store'
export default function Cart() {
  const { basket, setBasket } = useBasket()
  const checkout_items = [...basket]

  const totalPrice = checkout_items.reduce(
    (total, product) => total + product.price,
    0
  )

  return (
    <div className="flex flex-wrap items-start justify-between">
      <ContactForm />
      <div className="flex flex-col items-start justify-around ">
        <ul>
          {checkout_items.map((item) => (
            <li
              className="flex items-center justify-between w-56 "
              key={item.name}
            >
              <h3>{item.name}</h3>
              <p>Price: £{item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <div>
          <h2>Total Price: £{totalPrice.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  )
}
