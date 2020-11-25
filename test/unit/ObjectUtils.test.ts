import { ObjectUtils } from '../../src'

describe('ObjectUtils', () => {
  describe('getProperty', () => {
    test('basic object and 1 level depth', () => {
      const paramObject = { member: 'data' }
      const paramPath = 'member'
      const result = ObjectUtils.getProperty(paramObject, paramPath)
      const expected = 'data'

      expect(result).toEqual(expected)
    })

    test('complex object and 3 level depth', () => {
      const paramObject = {
        level1: { level2: { level3: '13' } },
        level2: { level3: '23' },
        level3: '33',
      }
      const paramPath = 'level1.level2'
      const result = ObjectUtils.getProperty(paramObject, paramPath)
      const expected = { level3: '13' }

      expect(result).toEqual(expected)
    })

    test('when path does not exists', () => {
      const paramObject = {
        level1: { level2: { level3: '13' } },
        level2: { level3: '23' },
        level3: '33',
      }
      const paramPath = 'level1.level3.level2'
      const result = ObjectUtils.getProperty(paramObject, paramPath)

      expect(result).toBeUndefined()
    })
  })
  describe('clone', () => {
    test('a basic object', () => {
      const paramObject = {
        member3: 'value3',
        member1: 'value1',
        member2: 'value2',
      }
      const result = ObjectUtils.clone(paramObject)

      expect(result).toEqual(paramObject)
    })
  })
})
