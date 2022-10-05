import { render, screen } from '@testing-library/react'

import Text from '../Text'

describe('Text component', () => {
  it('render Text component', () => {
    render(<Text text='Tong' />)

    expect(screen.getByText('Hello, Tong')).toBeInTheDocument()
  })
})
