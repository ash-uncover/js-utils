import { resolve } from 'path'
import { PromiseUtils } from '.'

describe('PromiseUtils', () => {
  describe('delayedPromise', () => {
    test('When Promise resolves with a delay', async () => {
      const expected = 'test'
      const paramFn = new Promise((resolve) => resolve(expected))
      const paramDelay = 100

      const initialTime = Date.now()

      return PromiseUtils.delayedPromise(paramFn, paramDelay)
        .then((result) => {
          const endTime = Date.now()
          expect(result).toEqual(expected)
          expect(endTime - initialTime).toBeGreaterThanOrEqual(paramDelay)
        })

    })

    test('When Promise resolves without delay', async () => {
      const expected = 'test'
      const paramFn = new Promise((resolve) => resolve(expected))
      const enoughTime = 50
      const initialTime = Date.now()

      return PromiseUtils.delayedPromise(paramFn)
        .then((result) => {
          const endTime = Date.now()
          expect(result).toEqual(expected)
          expect(endTime - initialTime).toBeLessThan(enoughTime)
        })
    })

    test('When Promise rejects', async () => {
      const expected = 'testError'
      const paramFn = new Promise((resolve, reject) => reject(expected))
      const paramDelay = 100

      const initialTime = Date.now()

      return PromiseUtils.delayedPromise(paramFn, paramDelay)
        .then((result) => {
          expect(result).toBe('error')
        })
        .catch((error) => {
          const endTime = Date.now()
          expect(error).toEqual(expected)
          expect(endTime - initialTime).toBeLessThan(paramDelay)
        })
    })
  })
})
