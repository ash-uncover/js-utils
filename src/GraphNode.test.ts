import { GraphNode } from '.'

describe('GraphNode', () => {

  // constructor //

  describe('constructor', () => {

    test('creates a node with the given id', () => {
      // Declaration
      const id = 'node1'
      // Execution
      const result = new GraphNode(id)
      // Assertion
      expect(result.id).toBe(id)
    })
  })
})
