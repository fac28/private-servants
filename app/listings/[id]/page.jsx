import React from 'react'
import { selectServantByID } from '@/lib/model'
import Image from 'next/image'
import AddToCart from '@/app/components/AddToCart'

export default function RenderIndividualServant({ params }) {
  const id = params.id
  const servant = selectServantByID(id)
  return (
    <>
      <h3>{servant.name}</h3>
      <Image
        src={servant.profile_img}
        alt="Servant Profile Picture"
        width={200}
        height={200}
        priority
      />
      <p>Price: £{servant.base_price}</p>
      <AddToCart />
      <p>{servant.about}</p>
    </>
  )
}
