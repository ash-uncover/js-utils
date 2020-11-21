import { resolve } from 'path'
import { PromiseUtils } from '../../src'

describe('PromiseUtils', () => {
  describe('delayedPromise', () => {
    test('When Promise resolves with a delay', (done) => {
      const expected = 'test'
      const paramFn = new Promise ((resolve) => resolve(expected))
      const paramDelay = 100

      const initialTime = Date.now()

      PromiseUtils.delayedPromise(paramFn, paramDelay)
        .then((result) => {
          const endTime = Date.now()
          expect(result).toEqual(expected)
          expect(endTime - initialTime).toBeGreaterThan(paramDelay)
          done()
        })
        .catch((error) => {
          done(error)
        })
    })

    test('When Promise resolves without delay', (done) => {
      const expected = 'test'
      const paramFn = new Promise ((resolve) => resolve(expected))
      const enoughTime = 50
      const initialTime = Date.now()

      PromiseUtils.delayedPromise(paramFn)
        .then((result) => {
          const endTime = Date.now()
          expect(result).toEqual(expected)
          expect(endTime - initialTime).toBeLessThan(enoughTime)
          done()
        })
        .catch((error) => {
          done(error)
        })
    })

    test('When Promise rejects', (done) => {
      const expected = 'testError'
      const paramFn = new Promise ((resolve, reject) => reject(expected))
      const paramDelay = 100

      const initialTime = Date.now()

      PromiseUtils.delayedPromise(paramFn, paramDelay)
        .then((result) => {
          done('error')
        })
        .catch((error) => {
          const endTime = Date.now()
          expect(error).toEqual(expected)
          expect(endTime - initialTime).toBeLessThan(paramDelay)
          done()
        })
    })
  })
})
