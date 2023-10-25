'use client'
import React, { useState } from 'react'
import Select from 'react-select'

export default function VariantSelect({ options }) {
  const [selectedOption, setSelectedOption] = useState(null)
  return (
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
  )
}
