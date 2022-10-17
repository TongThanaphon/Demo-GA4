import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import React from 'react'

import Layout from '@components/Layout'


const MagicPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
       Magic Page
      </h1>
      <p>test</p>
    </div>
  )
}

MagicPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default MagicPage
