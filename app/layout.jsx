import { Poiret_One } from 'next/font/google'
import './globals.css'
//components

import Navbar from './components/Navbar'
const poiret = Poiret_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Private Servants',
  description:
    'App to hire current and erstwhile public servants as private servants.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poiret.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}







