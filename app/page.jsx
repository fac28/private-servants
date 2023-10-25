// import { useState } from 'react'
import RenderServants from './components/RenderServants'
import FilterPrice from './components/FilterPrice'
import { listServants } from '@/lib/model'
import FilterAndDisplay from './components/FilterAndDisplay'

export default function Home() {
  const allServants = listServants()
  // const [max, setMax] = useState(9)
  return (
    <main>
      <p className="text-lg text-cyan-900 font-semibold">
        Welcome to Private Servants! We connect you with experienced politicians
        who are ready to put their skills to work on your behalf.
      </p>
      <RenderServants />
    </main>
  )
}
