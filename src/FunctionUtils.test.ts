import { FunctionUtils } from '.'

describe('FunctionUtils', () => {
  describe('getParamNames', () => {
    test('When function has no parameters', () => {
      const paramFn = () => {}
      const result = FunctionUtils.getParamNames(paramFn)
      const expected: string[] = []

      expect(result).toEqual(expected)
    })

    test('When function has some parameters', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const paramFn = (a: unknown, b: unknown) => {}
      const result = FunctionUtils.getParamNames(paramFn)
      const expected: string[] = ['a','b']

      expect(result).toEqual(expected)
    })
  })
})
