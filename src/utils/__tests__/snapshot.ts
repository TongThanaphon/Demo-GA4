import { sum } from '../for-test'

it('test function sum', () => {
  const snapshot = {
    value: sum(1, 2),
  }

  expect(snapshot).toMatchSnapshot({
    value: 3,
  })
})
