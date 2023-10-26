'use client'
import { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'
export const BasketContext = createContext({})

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage('BASKET', [])
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  )
}

export const useBasket = () => {
  return useContext(BasketContext)
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      if (saved !== null) {
        return JSON.parse(saved)
      }
      return defaultValue
    } catch {
      return defaultValue
    }
  })

  useEffect(() => {
    const rawValue = JSON.stringify(value)
    localStorage.setItem(key, rawValue)
  }, [key, value])

  return [value, setValue]
}
