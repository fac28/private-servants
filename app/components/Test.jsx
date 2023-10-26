'use client'
import { useBasket } from '../store'

export default function Test() {
  const contextArray = useBasket()
  return <p>{JSON.stringify(contextArray.basket, null, 2)}</p>
}
