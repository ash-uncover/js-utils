import { ArrayUtils } from '../../src'

describe('ArrayUtils', () => {
  describe('createIntArray', () => {
    test('when sent no parameter', () => {
      const result = ArrayUtils.createIntArray()
      const expected: any[] = []

      expect(result).toEqual(expected)
    })

    test('when sent a valid parameter', () => {
      const paramSize = 2
      const result = ArrayUtils.createIntArray(paramSize)
      const expected = [0, 1]

      expect(result).toEqual(expected)
    })
  })

  describe('shuffle', () => {
    test('when sent no parameter', () => {
      const result = ArrayUtils.shuffle()
      const expected: any[] = []

      expect(result).toEqual(expected)
    })

    test('when sent a valid array', () => {
      const paramArray = [1, 'a']
      const result = ArrayUtils.shuffle(paramArray)
      const expected = ['a', 1]

      expect(result).toHaveLength(expected.length)
      expect(
        (result[0] === expected[0] && result[1] === expected[1]) ||
        (result[0] === expected[1] && result[1] === expected[0])
      ).toBe(true)
    })
  })

  describe('randomSubArray', () => {
    test('when sent no parameter', () => {
      const result = ArrayUtils.randomSubArray()
      const expected: any[] = []

      expect(result).toEqual(expected)
    })

    test('when sent a valid array', () => {
      const paramArray = [1, 2, 3]
      const paramItems = 2
      const result = ArrayUtils.randomSubArray(paramArray, paramItems)

      expect(result).toHaveLength(paramItems)
      expect(paramArray).toEqual(expect.arrayContaining(result))
    })
  })
})
