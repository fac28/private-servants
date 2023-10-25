'use client'

import { useState } from 'react'
import FilterPrice from './FilterPrice'
import RenderFiltered from './RenderFiltered'

export default function FilterAndDisplay({ allServants }) {
  console.log(allServants)
  const [max, setMax] = useState(10000)

  return (
    <>
      <form>
        <h2>Filter servants</h2>
        <FilterPrice max={max} setMax={setMax} />
        <RenderFiltered allServants={allServants} max={max} />
      </form>
    </>
  )
}
