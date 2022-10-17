import type { ReactElement } from 'react'
import React from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: ReactElement
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <div>
      <nav className='text-center bg-orange-600 text-bold flex justify-center space-x-4'>
        <Link href='/'>Home</Link>
        <Link href='/magic'>Magic</Link>
        <Link href='/tong'>Tong</Link>
      </nav>
      <div className='h-screen'>{children}</div>
      <footer className='text-center bg-emerald-300 text-bold'>
        <Link href='https://www.shippop.com/'>SHIPPOP</Link>
      </footer>
    </div>
  )
}

export default Layout
