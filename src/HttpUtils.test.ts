import {
  HttpHeaders,
  HttpMethods,
  HttpStatuses
} from '.'

describe('HttpUtils', () => {
  describe('HttpHeader', () => {
    test('check members are defined', () => {
      for (let header in HttpHeaders) {
        expect(header).toBeDefined()
      }
    })
  })

  describe('HttpMethod', () => {
    test('check members are defined', () => {
      for (let method in HttpMethods) {
        expect(method).toBeDefined()
      }
    })
  })

  describe('HttpStatus', () => {
    test('check members are defined', () => {
      for (let status in HttpStatuses) {
        expect(status).toBeDefined()
      }
    })
  })
})
