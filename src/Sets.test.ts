import { Sets } from '.'

describe('Sets', () => {

  describe('toSets', () => {
    test('when sent an empty array', () => {
      const paramArray: string[] = []
      const result = Sets.toSet(paramArray)
      const expected: string[] = []

      expect(result).toEqual(expected)
    })

    test('when sent a simple array', () => {
      const paramArray: string[] = ['a', 'b']
      const result = Sets.toSet(paramArray)
      const expected: string[] = ['a', 'b']

      expect(result).toEqual(expected)
    })

    test('when sent an array with dupplication', () => {
      const paramArray: string[] = ['a', 'b', 'a']
      const result = Sets.toSet(paramArray)
      const expected: string[] = ['a', 'b']

      expect(result).toEqual(expected)
    })
  })

  describe('add', () => {
    test('when adding an element', () => {
      const paramSet: string[] = ['a']
      const paramElement = 'b'
      const result = Sets.add(paramSet, paramElement)
      const expected: string[] = ['a', 'b']

      expect(result).toEqual(expected)
    })

    test('when adding several element', () => {
      const paramSet: string[] = ['a']
      const paramElement1 = 'b'
      const paramElement2 = 'c'
      const result = Sets.add(paramSet, paramElement1, paramElement2)
      const expected: string[] = ['a', 'b', 'c']

      expect(result).toEqual(expected)
    })

    test('when adding an element already in set', () => {
      const paramSet: string[] = ['a']
      const paramElement = 'a'
      const result = Sets.add(paramSet, paramElement)
      const expected: string[] = ['a']

      expect(result).toEqual(expected)
    })

    test('when adding duplicated element', () => {
      const paramSet: string[] = ['a']
      const paramElement1 = 'b'
      const paramElement2 = 'b'
      const result = Sets.add(paramSet, paramElement1, paramElement2)
      const expected: string[] = ['a', 'b']

      expect(result).toEqual(expected)
    })
  })

  describe('remove', () => {
    test('when removing an existing element', () => {
      const paramSet: string[] = ['a']
      const paramElement = 'a'
      const result = Sets.remove(paramSet, paramElement)
      const expected: string[] = []

      expect(result).toEqual(expected)
    })

    test('when removing several elements', () => {
      const paramSet: string[] = ['a', 'b', 'c']
      const paramElement1 = 'a'
      const paramElement2 = 'c'
      const result = Sets.remove(paramSet, paramElement1, paramElement2)
      const expected: string[] = ['b']

      expect(result).toEqual(expected)
    })

    test('when removing a missing element', () => {
      const paramSet: string[] = ['a', 'b']
      const paramElement = 'c'
      const result = Sets.remove(paramSet, paramElement)
      const expected: string[] = ['a', 'b']

      expect(result).toEqual(expected)
    })

    test('when removing sevaral elements including some missing', () => {
      const paramSet: string[] = ['a', 'b']
      const paramElement1 = 'c'
      const paramElement2 = 'b'
      const paramElement3 = 'd'
      const result = Sets.remove(paramSet, paramElement1, paramElement2, paramElement3)
      const expected: string[] = ['a']

      expect(result).toEqual(expected)
    })
  })

  describe('merge', () => {
    test('when merging distinct arrays', () => {
      const paramSet1: string[] = ['a', 'b']
      const paramSet2: string[] = ['c', 'd']
      const result = Sets.merge(paramSet1, paramSet2)
      const expected: string[] = ['a', 'b', 'c', 'd']

      expect(result).toEqual(expected)
    })

    test('when merging arrays with same values', () => {
      const paramSet1: string[] = ['a', 'b']
      const paramSet2: string[] = ['c', 'a']
      const result = Sets.merge(paramSet1, paramSet2)
      const expected: string[] = ['a', 'b', 'c']

      expect(result).toEqual(expected)
    })
  })
})


