import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import React from 'react'

import Layout from '@components/Layout'

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
      <p>test</p>
      <p>Updated</p>
    </div>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default HomePage
