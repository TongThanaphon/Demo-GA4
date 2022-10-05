import { render } from '@testing-library/react'
import Text from '../Text'

it('renders homepage unchanged', () => {
  const { container } = render(<Text text='Tong' />)
  expect(container).toMatchSnapshot()
})
