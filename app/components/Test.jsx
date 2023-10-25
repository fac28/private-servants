'use client'
import { useBasket } from '../store'

export default function Test() {
  const contextArray = useBasket()
  return <p>{contextArray.basket}</p>
}
