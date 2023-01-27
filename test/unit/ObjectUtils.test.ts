import { ObjectUtils } from '../../src'

describe('ObjectUtils', () => {

  // getProperty //

  describe('getProperty', () => {

    test('basic object and 1 level depth', () => {
      // Declaration
      const paramObject = { member: 'data' }
      const paramPath = 'member'
      // Execution
      const result = ObjectUtils.getProperty(paramObject, paramPath)
      // Assertion
      const expected = 'data'
      expect(result).toEqual(expected)
    })

    test('complex object and 3 level depth', () => {
      // Declaration
      const paramObject = {
        level1: { level2: { level3: '13' } },
        level2: { level3: '23' },
        level3: '33',
      }
      const paramPath = 'level1.level2'
      // Execution
      const result = ObjectUtils.getProperty(paramObject, paramPath)
      // Assertion
      const expected = { level3: '13' }
      expect(result).toEqual(expected)
    })

    test('when path does not exists', () => {
      // Declaration
      const paramObject = {
        level1: { level2: { level3: '13' } },
        level2: { level3: '23' },
        level3: '33',
      }
      const paramPath = 'level1.level3.level2'
      // Execution
      const result = ObjectUtils.getProperty(paramObject, paramPath)
      // Assertion
      expect(result).toBeUndefined()
    })
  })

  // clone //

  describe('clone', () => {

    test('a basic object', () => {
      // Declaration
      const paramObject = {
        member3: 'value3',
        member1: 'value1',
        member2: 'value2',
      }
      // Execution
      const result = ObjectUtils.clone(paramObject)
      // Assertion
      expect(result).toEqual(paramObject)
    })
  })

  // arrayfy //

  describe('arrayfy', () => {

    test('when sent an array', () => {
      // Declaration
      const paramObject = [1, 2]
      // Execution
      const result = ObjectUtils.arrayfy(paramObject)
      // Assertion
      expect(result).toEqual(paramObject)
    })

    test('when sent a single object', () => {
      // Declaration
      const paramObject = 'test'
      // Execution
      const result = ObjectUtils.arrayfy(paramObject)
      // Assertion
      expect(result).toEqual(['test'])
    })
  })
})
