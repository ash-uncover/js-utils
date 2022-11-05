import { DataStates, DataStatesUtils } from '../../src'

describe('DataStatesUtils', () => {

  describe('mergeDataStates', () => {

    test('when no states are sent ', () => {
      // Declaration
      const states = []
      // Execution
      const result = DataStatesUtils.mergeDataStates(states)
      // Asertion
      const expected = DataStates.NEVER
      expect(result).toBe(expected)
    })

    test('when one state is failure', () => {
      // Declaration
      const states = [
        DataStates.SUCCESS,
        DataStates.FETCHING,
        DataStates.FETCHING_FIRST,
        DataStates.NEVER,
        DataStates.OUTDATED,
        DataStates.FAILURE
      ]
      // Execution
      const result = DataStatesUtils.mergeDataStates(states)
      // Asertion
      const expected = DataStates.FAILURE
      expect(result).toBe(expected)
    })

    test('when one state is outdated', () => {
      // Declaration
      const states = [
        DataStates.SUCCESS,
        DataStates.FETCHING,
        DataStates.FETCHING_FIRST,
        DataStates.NEVER,
        DataStates.OUTDATED
      ]
      // Execution
      const result = DataStatesUtils.mergeDataStates(states)
      // Asertion
      const expected = DataStates.OUTDATED
      expect(result).toBe(expected)
    })

    test('when one state is never', () => {
      // Declaration
      const states = [
        DataStates.SUCCESS,
        DataStates.FETCHING,
        DataStates.FETCHING_FIRST,
        DataStates.NEVER,
      ]
      // Execution
      const result = DataStatesUtils.mergeDataStates(states)
      // Asertion
      const expected = DataStates.NEVER
      expect(result).toBe(expected)
    })

    test('when one state is fetching first', () => {
      // Declaration
      const states = [
        DataStates.SUCCESS,
        DataStates.FETCHING,
        DataStates.FETCHING_FIRST,
      ]
      // Execution
      const result = DataStatesUtils.mergeDataStates(states)
      // Asertion
      const expected = DataStates.FETCHING_FIRST
      expect(result).toBe(expected)
    })

    test('when one state is fetching', () => {
      // Declaration
      const states = [
        DataStates.SUCCESS,
        DataStates.FETCHING,
      ]
      // Execution
      const result = DataStatesUtils.mergeDataStates(states)
      // Asertion
      const expected = DataStates.FETCHING
      expect(result).toBe(expected)
    })

    test('when all states are success', () => {
      // Declaration
      const states = [
        DataStates.SUCCESS,
      ]
      // Execution
      const result = DataStatesUtils.mergeDataStates(states)
      // Asertion
      const expected = DataStates.SUCCESS
      expect(result).toBe(expected)
    })
  })
})
