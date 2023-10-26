'use client'

import { useState } from 'react'
import FilterPrice from './FilterPrice'
import RenderFiltered from './RenderFiltered'
import Select from 'react-select'

export default function FilterAndDisplay({ allServants, variants }) {
  const [max, setMax] = useState(10000)
  const [selectedOption, setSelectedOption] = useState({ value: 1 })
  const options = variants.map((variant) => {
    return {
      value: variant.price_modifier,
      label: variant.task,
    }
  })
  return (
    <>
      <form>
        <h2>Filter servants</h2>
        <FilterPrice max={max} setMax={setMax} />
        <Select
          className="custom-select"
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
        ></Select>
        <RenderFiltered
          allServants={allServants}
          max={max}
          modifier={selectedOption.value}
        />
      </form>
    </>
  )
}
// this page &/or VariantSelect component need refactor lots of repetition
