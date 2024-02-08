export type DataState =
| 'NEVER'
| 'FETCHING_FIRST'
| 'FETCHING'
| 'SUCCESS'
| 'FAILURE'
| 'OUTDATED'

export const DataStates: {
  NEVER: DataState
  FETCHING_FIRST: DataState
  FETCHING: DataState
  SUCCESS: DataState
  FAILURE: DataState
  OUTDATED: DataState
} = {
  NEVER: 'NEVER',
  FETCHING_FIRST: 'FETCHING_FIRST',
  FETCHING: 'FETCHING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  OUTDATED: 'OUTDATED',
}
