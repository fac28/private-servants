'use client'
import { useState } from 'react'

export default function FilterPrice({ max, setMax }) {
  function update(event) {
    // `+` converts the string value to a number
    setMax(+event.target.value)
    console.log(max)
  }
  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor="max-price">
        Max price {max}
        <br></br>
        <input
          type="range"
          id="max-price"
          min="0"
          max="3000"
          step="5"
          value={max}
          onChange={update}
        />
      </label>
    </fieldset>
  )
}
