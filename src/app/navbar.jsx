"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname ,useRouter} from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <nav className='flex bg-gray-600 py-2 px-5 justify-between'>
      <div className='flex'>
        <h1 className='text-white'>Navbar</h1>
        <ul className='flex ml-5'>
            <Link href='/'>
            <li className={pathname === '/' ? 'mr-3 text-blue-400 cursor-pointer' : 'mr-3 text-white cursor-pointer'}>Home</li>
            </Link>

            <Link href='/about'>
            <li className={pathname === '/about' ? 'mr-3 text-blue-400 cursor-pointer' : 'mr-3 text-white cursor-pointer'}>About</li>
            </Link>
            
            <Link href='/about/profile'>
            <li className={pathname === '/about/profile' ? 'mr-3 text-blue-400 cursor-pointer' : 'mr-3 text-white cursor-pointer'}>Profile</li>
            </Link>
        </ul>
      </div>

      <div>
        <button 
        className='bg-blue-400 text-white px-3  rounded-md cursor-pointer'
        onClick={() => router.push('/login')}
        >Login</button>
      </div>
    </nav>
  )
}
