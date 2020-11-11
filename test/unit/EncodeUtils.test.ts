import { EncodeUtils } from '../../src'

const DATA = {
  TOTO: {
    decoded: 'toto',
    encoded: 'dG90bw=='
  }
}

describe('EncodeUtils', () => {
  describe('encode', () => {
    test('properly encodes value', () => {
      const param = DATA.TOTO.decoded
      const result = EncodeUtils.encode(param)
      const expected = DATA.TOTO.encoded

      expect(result).toEqual(expected)
    })
    test('when parameters are missing', () => {
      const result = EncodeUtils.encode()
      const expected = ''

      expect(result).toEqual(expected)
    })
  })

  describe('decode', () => {
    test('properly decodes value', () => {
      const param = DATA.TOTO.encoded
      const result = EncodeUtils.decode(param)
      const expected = DATA.TOTO.decoded

      expect(result).toEqual(expected)
    })
    test('when parameters are missing', () => {
      const result = EncodeUtils.decode()
      const expected = ''

      expect(result).toEqual(expected)
    })
  })

  describe('encodeBasicHeader', () => {
    test('properly encodes credentials', () => {
      const paramUsername = 'adminUsername'
      const paramPassword = 'adminPassword'
      const result = EncodeUtils.encodeBasicHeader(paramUsername, paramPassword)
      const expected = 'Basic YWRtaW5Vc2VybmFtZTphZG1pblBhc3N3b3Jk'

      expect(result).toEqual(expected)
    })
    test('when parameters are missing', () => {
      const result = EncodeUtils.encodeBasicHeader()
      const expected = 'Basic Og=='

      expect(result).toEqual(expected)
    })
  })

  describe('decodeBasicHeader', () => {
    test('properly decodes a basic authentication header', () => {
      const param = 'Basic YWRtaW5Vc2VybmFtZTphZG1pblBhc3N3b3Jk'
      const result = EncodeUtils.decodeBasicHeader(param)
      const expected = {
        username: 'adminUsername',
        password: 'adminPassword'
      }

      expect(result).toEqual(expected)
    })
    test('returns empty data when the encoding was not correct', () => {
      const param = `Basic ${DATA.TOTO.encoded}`
      const result = EncodeUtils.decodeBasicHeader(param)
      const expected = {
        username: null,
        password: null
      }

      expect(result).toEqual(expected)
    })
    test('returns empty data when parameter is missing', () => {
      const result = EncodeUtils.decodeBasicHeader()
      const expected = {
        username: null,
        password: null
      }

      expect(result).toEqual(expected)
    })
  })
})
