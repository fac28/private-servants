import ContactForm from '../components/ContactForm'

export default function Cart() {
  const checkout_items = {
    products: [
      {
        name: 'Boris Johnson',
        price: 10.99,
      },
      {
        name: 'Theresa May',
        price: 24.95,
      },
    ],
  }

  const totalPrice = checkout_items.products.reduce(
    (total, product) => total + product.price,
    0
  )

  return (
    <div className="flex flex-wrap items-start justify-between">
      <ContactForm />
      <div className="flex flex-col items-start justify-around ">
        <ul>
          {checkout_items.products.map((item) => (
            <li
              className="flex items-center justify-between w-56 "
              key={item.name}
            >
              <h3>{item.name}</h3>
              <p>Price: £{item.price}</p>
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
