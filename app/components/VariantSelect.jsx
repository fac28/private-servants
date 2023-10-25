'use client'
import React, { useState } from 'react'
import Select from 'react-select'

export default function VariantSelect({ variants, base_price }) {
  const [selectedOption, setSelectedOption] = useState({ value: 1 })
  const options = variants.map((variant) => {
    return {
      value: variant.price_modifier,
      label: variant.task,
    }
  })
  return (
    <>
      <Select
        className="custom-select"
        classNames={{
          control: (state) =>
            state.isFocused ? 'border-red-600' : 'border-grey-300',
        }}
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
      ></Select>
      <p>
        Total Price: £
        {Math.round(base_price * selectedOption.value * 100) / 100}
      </p>
    </>
  )
}
