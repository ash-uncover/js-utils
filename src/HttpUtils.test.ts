import {
  HttpHeaders,
  HttpMethods,
  HttpStatuses
} from '.'

describe('HttpUtils', () => {
  describe('HttpHeader', () => {
    test('check members are defined', () => {
      for (const header in HttpHeaders) {
        expect(header).toBeDefined()
      }
    })
  })

  describe('HttpMethod', () => {
    test('check members are defined', () => {
      for (const method in HttpMethods) {
        expect(method).toBeDefined()
      }
    })
  })

  describe('HttpStatus', () => {
    test('check members are defined', () => {
      for (const status in HttpStatuses) {
        expect(status).toBeDefined()
      }
    })
  })
})
