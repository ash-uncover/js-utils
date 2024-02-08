import { StringUtils } from '.'

describe('StringUtils', () => {

  describe('capitalize', () => {
    test('With a lower case word', () => {
      expect(StringUtils.capitalize('test')).toEqual('Test')
    })
    test('With an upper case word', () => {
      expect(StringUtils.capitalize('TEST')).toEqual('Test')
    })
    test('With an mixed case word', () => {
      expect(StringUtils.capitalize('tEsT')).toEqual('Test')
    })
    test('With 1 letter string', () => {
      expect(StringUtils.capitalize('a')).toEqual('A')
    })
    test('With an empty string', () => {
      expect(StringUtils.capitalize('')).toEqual('')
    })
    test('With special chars', () => {
      expect(StringUtils.capitalize('*/+-')).toEqual('*/+-')
    })
  })

  describe('capitalizeFirst', () => {
    test('With a lower case word', () => {
      expect(StringUtils.capitalizeFirst('test')).toEqual('T')
    })
    test('With an upper case word', () => {
      expect(StringUtils.capitalizeFirst('TEST')).toEqual('T')
    })
    test('With an mixed case word', () => {
      expect(StringUtils.capitalizeFirst('tEsT')).toEqual('T')
    })
    test('With 1 letter string', () => {
      expect(StringUtils.capitalizeFirst('a')).toEqual('A')
    })
    test('With an empty string', () => {
      expect(StringUtils.capitalizeFirst('')).toEqual('')
    })
    test('With special chars', () => {
      expect(StringUtils.capitalizeFirst('*/+-')).toEqual('*')
    })
  })

  describe('replaceAll', () => {
    test('Properly replace several occurrences', () => {
      const paramValue = 'bonjour test ca test bien'
      const paramPattern = 'test'
      const paramWith = 'stroumph'

      const result = StringUtils.replaceAll(paramValue, paramPattern, paramWith)

      const expected = 'bonjour stroumph ca stroumph bien'

      expect(result).toEqual(expected)
    })
  })

  describe('getIndent', () => {

    test('With default char', () => {
      expect(StringUtils.getIndent(1)).toEqual('  ')
    })

    test('With custom char', () => {
      expect(StringUtils.getIndent(2, '*')).toEqual('**')
    })
  })
})
