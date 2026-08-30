import { GraphLink } from '.'

describe('GraphLink', () => {

  // constructor //

  describe('constructor', () => {

    test('creates a link with the given source and target', () => {
      // Declaration
      const source = 'node1'
      const target = 'node2'
      // Execution
      const result = new GraphLink(source, target)
      // Assertion
      expect(result.source).toBe(source)
      expect(result.target).toBe(target)
    })
  })
})
