'use client'
import React, { useState } from 'react'

export default function ContactForm() {
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Submitted Data:', { address, name, contact })
  }

  return (
    <div>
      <h2>Shipping</h2>
      <form
        className="flex flex-col items-start justify-around gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact">Mobile:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
