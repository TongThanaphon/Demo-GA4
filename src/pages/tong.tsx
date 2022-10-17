import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import React from 'react'

import Layout from '@components/Layout'


const TongPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
       Tong Page
      </h1>
      <p>test</p>
    </div>
  )
}

TongPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default TongPage
