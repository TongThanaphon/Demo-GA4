import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import React from 'react'

import Layout from '@components/Layout'

import Text from '@components/Text'

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello World!!</h1>
      <Text text='Tong' />
    </div>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default HomePage
