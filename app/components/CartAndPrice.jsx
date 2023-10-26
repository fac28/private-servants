'use client'
import AddToCart from './AddToCart'
import VariantSelect from './VariantSelect'
import { useState } from 'react'

export default function CartAndPrice({ variants, servant }) {
  const [selectedOption, setSelectedOption] = useState({ value: 1 })
  return (
    <>
      <VariantSelect
        variants={variants}
        base_price={servant.base_price}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <AddToCart
        servant_name={servant.name}
        price={servant.base_price * selectedOption.value}
      />
    </>
  )
}
