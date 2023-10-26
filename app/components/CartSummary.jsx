'use client'
import { useBasket } from '../store'

export default function CartSummary() {
  const { basket, setBasket } = useBasket()

  const itemCount = basket.length

  return (
    <p className=" text-light bg-accent w-6 h-6 flex rounded-full justify-center ">
      {itemCount}
    </p>
  )
}
