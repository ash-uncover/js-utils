import { UUID } from '../../src'

describe('UUID', () => {
  describe('next', () => {
    test('returns a valid string', () => {
      const result = UUID.next()

      expect(result).toBeDefined()
      expect(typeof result).toEqual('string')
    })
  })
})
