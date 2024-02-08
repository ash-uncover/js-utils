import { ArrayUtils } from '.'

describe('ArrayUtils', () => {

  // createIntArray //

  describe('createIntArray', () => {

    test('when sent no parameter', () => {
      // Declaration
      // Execution
      const result = ArrayUtils.createIntArray()
      // Assertion
      const expected: any[] = []
      expect(result).toEqual(expected)
    })

    test('when sent a valid parameter', () => {
      // Declaration
      const paramSize = 2
      // Execution
      const result = ArrayUtils.createIntArray(paramSize)
      // Assertion
      const expected = [0, 1]
      expect(result).toEqual(expected)
    })
  })

  // shuffle //

  describe('shuffle', () => {

    test('when sent no parameter', () => {
      // Declaration
      // Execution
      const result = ArrayUtils.shuffle()
      // Assertion
      const expected: any[] = []
      expect(result).toEqual(expected)
    })

    test('when sent a valid array', () => {
      // Declaration
      const paramArray = [1, 'a']
      // Execution
      const result = ArrayUtils.shuffle(paramArray)
      // Assertion
      const expected = ['a', 1]
      expect(result).toHaveLength(expected.length)
      expect(
        (result[0] === expected[0] && result[1] === expected[1]) ||
        (result[0] === expected[1] && result[1] === expected[0])
      ).toBe(true)
    })
  })

  // randomSubArray //

  describe('randomSubArray', () => {

    test('when sent no parameter', () => {
      // Declaration
      // Execution
      const result = ArrayUtils.randomSubArray()
      // Assertion
      const expected: any[] = []
      expect(result).toEqual(expected)
    })

    test('when sent a valid array', () => {
      // Declaration
      const paramArray = [1, 2, 3]
      const paramItems = 2
      // Execution
      const result = ArrayUtils.randomSubArray(paramArray, paramItems)
      // Assertion
      expect(result).toHaveLength(paramItems)
      expect(paramArray).toEqual(expect.arrayContaining(result))
    })
  })

  // randomElement //

  describe('randomElement', () => {

    test('when no array is sent', () => {
      // Declaration
      // Execution
      const result = ArrayUtils.randomElement()
      // Assertion
      expect(result).toBe(null)
    })

    test('when sent a valid array', () => {
      // Declaration
      const paramArray = [1, 2, 3]
      // Execution
      const result = ArrayUtils.randomElement(paramArray)
      // Assertion
      expect(result).not.toBe(null)
    })
  })

  // removeElement //

  describe('removeElement', () => {

    test('when array is emtpy', () => {
      // Declaration
      const array: any[] = []
      const element = 'toto'
      // Execution
      const result = ArrayUtils.removeElement(array, element)
      // Assertion
      const expected: any[] = []
      expect(result).toEqual(expected)
    })

    test('when array does not contain the element', () => {
      // Declaration
      const array: string[] = ['titi', 'tata']
      const element = 'toto'
      // Execution
      const result = ArrayUtils.removeElement(array, element)
      // Assertion
      const expected: string[] = ['titi', 'tata']
      expect(result).toEqual(expected)
    })

    test('when array contains the element', () => {
      // Declaration
      const array: string[] = ['titi', 'toto', 'tata']
      const element = 'toto'
      // Execution
      const result = ArrayUtils.removeElement(array, element)
      // Assertion
      const expected: string[] = ['titi', 'tata']
      expect(result).toEqual(expected)
    })
  })
})
