import { sum } from '../for-test'

describe('Test in utils folder', () => {
  it('sum number', () => {
    const result = sum(1, 2)

    expect(result).toEqual(3)
  })
})
