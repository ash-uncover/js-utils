import { DateUtils } from '../../src'

describe('DateUtils', () => {
  describe('durationToHumanTime', () => {
    test('When sent zero', () => {
      const paramDuration = 0
      const result = DateUtils.durationToHumanTime(paramDuration)
      const expected = {
        millis: 0,
        seconds: 0,
        minutes: 0,
        hours: 0
      }

      expect(result).toEqual(expected)
    })
  })

  describe('dateString', () => {
    test('When send a valid date', () => {
      const paramDate = new Date(2005, 1, 25)
      const result = DateUtils.dateString(paramDate)
      const expected = '2005-01-25 00:00:00'

      expect(result).toEqual(expected)
    })
  })

  describe('nowString', () => {
    test('returns something', () => {
      const result = DateUtils.nowString()
      expect(result).toBeDefined()
    })
  })
})
