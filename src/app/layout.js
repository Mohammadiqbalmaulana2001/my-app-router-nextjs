'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

const disableNavbar = ['/login', '/register']
export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        {disableNavbar.includes(pathname) ? null : <Navbar />}
        {children}
      </body>
    </html>
  )
}
