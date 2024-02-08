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
      const paramFn = (a: any, b: any) => {}
      const result = FunctionUtils.getParamNames(paramFn)
      const expected: string[] = ['a','b']

      expect(result).toEqual(expected)
    })
  })
})
