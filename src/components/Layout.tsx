import type { ReactElement } from 'react'
import React from 'react'

interface LayoutProps {
  children: ReactElement
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <div>
      <nav className='text-center bg-orange-600 text-bold'>Nav</nav>
      {children}
      <footer className='text-center bg-emerald-300 text-bold'>Footer</footer>
    </div>
  )
}

export default Layout
