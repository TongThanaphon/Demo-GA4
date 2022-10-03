import { MyText } from 'types/my-text'

import React from 'react'

const Text: React.FC<MyText> = (props) => {
    const { text } = props

    return (
        <p className='text-[#a1f542]'>Hello, {text}</p>
    )
}

export default Text