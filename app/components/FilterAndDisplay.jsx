import FilterPrice from './FilterPrice'
import RenderServants from './RenderServants'

export default function FilterAndDisplay({ allServants }) {
  console.log(allServants)

  return (
    <>
      <form>
        <h2>Filter servants</h2>
        <FilterPrice max={max} setMax={setMax} />
      </form>
    </>
  )
}
