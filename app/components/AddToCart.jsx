'use client'
import { useBasket } from '../store'

export default function AddToCart(props) {
  const { basket, setBasket } = useBasket()
  const updateCart = (newItem) => {
    setBasket([...basket, newItem])
  }

  return (
    <button
      onClick={() => {
        {
          updateCart({ name: props.servant_name, price: props.price })
        }
      }}
    >
      Add to Cart
    </button>
  )
}
