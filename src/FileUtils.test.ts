import { FileUtils } from '.'

describe('FileUtils', () => {

  // #region getExtention
  describe('getExtention', () => {
    test('properly load a file extention', () => {
      const file = new File([], 'toto.test')
      const result = FileUtils.getExtention(file)
      const expected = 'test'
      expect(result).toBe(expected)
    })
  })
  // #endregion

  // #region checkExtention
  describe('checkExtention', () => {
    test('when the extention is in the list', () => {
      const file = new File([], 'toto.test')
      const extentions = ['exe', 'test', 'bat']
      const result = FileUtils.checkExtention(file, extentions)
      expect(result).toBe(true)
    })
    test('when the extention is not in the list', () => {
      const file = new File([], 'toto.test')
      const extentions = ['exe', 'bat']
      const result = FileUtils.checkExtention(file, extentions)
      expect(result).toBe(false)
    })
  })
  // #endregion

  // #region checkSize
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
  // #endregion
})
