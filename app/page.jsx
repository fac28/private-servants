import RenderServants from './components/RenderServants'


export default function Home() {
  return (
    <main>
      <p className="text-lg text-cyan-900 font-semibold">Welcome to Private Servants! We connect you with experienced politicians who are ready to put their skills to work on your behalf. </p>
      <h1 className=''>Popular Listings</h1>
    <RenderServants />
    </main>
  )
}
