import { listServants, listVariants } from '@/lib/model'
import FilterAndDisplay from '../components/FilterAndDisplay'

export default function listings() {
  const allServants = listServants()
  const variants = listVariants()
  return (
    <div>
      <h1 className="text-3xl font-bold">Listings.. </h1>
      <FilterAndDisplay allServants={allServants} variants={variants} />
    </div>
  )
}
