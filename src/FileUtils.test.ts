import { FileUtils } from '.'

describe('FileUtils', () => {
  describe('dumb', () => {
    test('dumb test', () => {
      const result = FileUtils.dumb()
      const expected = ''
      expect(result).toBe(expected)
    })
  })

  describe('getExtension', () => {
    test('properly load a file extention', () => {
      const file = new File([], 'toto.test')
      const result = FileUtils.getExtension(file)
      const expected = 'test'
      expect(result).toBe(expected)
    })
  })

  describe('checkExtension', () => {
    test('when the extention is in the list', () => {
      const file = new File([], 'toto.test')
      const extentions = ['exe', 'test', 'bat']
      const result = FileUtils.checkExtension(file, extentions)
      expect(result).toBe(true)
    })
    test('when the extention is not in the list', () => {
      const file = new File([], 'toto.test')
      const extentions = ['exe', 'bat']
      const result = FileUtils.checkExtension(file, extentions)
      expect(result).toBe(false)
    })
  })

  describe('checkSize', () => {
    test('when the size matches', () => {
      const file = new File([], 'toto.test')
      const size = 1
      const result = FileUtils.checkSize(file, size)
      expect(result).toBe(true)
    })
    test('when the size does not matches', () => {
      const file = new File(['toto'], 'toto.test')
      const size = 1
      const result = FileUtils.checkSize(file, size)
      expect(result).toBe(false)
    })
  })
})
