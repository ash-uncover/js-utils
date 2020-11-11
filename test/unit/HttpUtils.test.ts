import { HttpUtils } from '../../src'

describe('HttpUtils', () => {
  describe('HttpHeader', () => {
    test('check members are defined', () => {
      for (let header in HttpUtils.HttpHeader) {
        expect(header).toBeDefined()
      }
    })
  })

  describe('HttpMethod', () => {
    test('check members are defined', () => {
      for (let method in HttpUtils.HttpMethod) {
        expect(method).toBeDefined()
      }
    })
  })

  describe('HttpStatus', () => {
    test('check members are defined', () => {
      for (let status in HttpUtils.HttpStatus) {
        expect(status).toBeDefined()
      }
    })
  })
})
