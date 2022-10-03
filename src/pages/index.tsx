import type { NextPage } from 'next'

import React from 'react'

import Text from '@components/Text'

const HomePage: NextPage = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello World!!</h1>
      <Text text='Tong' />
    </div>
  )
}

export default HomePage
