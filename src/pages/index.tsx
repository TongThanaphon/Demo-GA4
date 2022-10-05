import type { NextPage } from 'next'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import React from 'react'

import Layout from '@components/Layout'

import Text from '@components/Text'

const HomePage: NextPage = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
      <p>test</p>
      {/* <Text text='Tong' /> */}
    </div>
  )
}

// HomePage.getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>
// }

export default HomePage
