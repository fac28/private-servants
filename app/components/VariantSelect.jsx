'use client'
import React, { useState } from 'react'
import Select from 'react-select'

export default function VariantSelect({
  variants,
  base_price,
  selectedOption,
  setSelectedOption,
}) {
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
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
      ></Select>
      <p>Total Price: £{(base_price * selectedOption.value).toFixed(2)}</p>
    </>
  )
}
