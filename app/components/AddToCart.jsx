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
          updateCart(props.servant_name)
        }
      }}
    >
      Add to Cart
    </button>
  )
}
