import { BasketContext, BasketProvider } from './store'
import { Montserrat } from 'next/font/google'
import './globals.css'
//components

import Navbar from './components/Navbar'
const mont = Montserrat({
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
      <BasketProvider>
        <body className={mont.className}>
          <Navbar />
          {children}
        </body>
      </BasketProvider>
    </html>
  )
}
