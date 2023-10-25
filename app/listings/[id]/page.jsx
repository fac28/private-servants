import React from 'react'
import { listVariants, selectServantByID } from '@/lib/model'
import Image from 'next/image'
import AddToCart from '@/app/components/AddToCart'
import Select from 'react-select'
import VariantSelect from '@/app/components/VariantSelect'

export default function RenderIndividualServant({ params }) {
  const id = params.id
  const servant = selectServantByID(id)
  const variants = listVariants()
  console.log(variants)
  const options = variants.map((variant) => {
    return {
      value: variant.task,
      label: variant.task,
    }
  })
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
      <VariantSelect options={options} />
      <p>Total Price: £{servant.base_price}</p>
      <AddToCart />

      <p>{servant.about}</p>
    </>
  )
}
