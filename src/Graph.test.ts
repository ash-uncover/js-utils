import { Graph, GraphLink, GraphNode } from '.'

describe('Graph', () => {

  // constructor //

  describe('constructor', () => {

    test('creates an empty graph', () => {
      // Declaration
      // Execution
      const result = new Graph()
      // Assertion
      expect(result.nodes).toEqual([])
      expect(result.links).toEqual([])
    })
  })

  // addNode //

  describe('addNode', () => {

    test('adds a node to the graph', () => {
      // Declaration
      const graph = new Graph()
      const node = new GraphNode('node1')
      // Execution
      graph.addNode(node)
      // Assertion
      expect(graph.nodes).toHaveLength(1)
      expect(graph.nodes[0]).toBe(node)
    })

    test('does not add a node when its id is already present', () => {
      // Declaration
      const graph = new Graph()
      graph.addNode(new GraphNode('node1'))
      // Execution
      graph.addNode(new GraphNode('node1'))
      // Assertion
      expect(graph.nodes).toHaveLength(1)
    })
  })

  // removeNode //

  describe('removeNode', () => {

    test('removes an existing node from the graph', () => {
      // Declaration
      const graph = new Graph()
      graph.addNode(new GraphNode('node1'))
      // Execution
      graph.removeNode('node1')
      // Assertion
      expect(graph.nodes).toHaveLength(0)
    })

    test('removes links where the node is the source', () => {
      // Declaration
      const graph = new Graph()
      graph.addNode(new GraphNode('node1'))
      graph.addNode(new GraphNode('node2'))
      graph.addLink(new GraphLink('node1', 'node2'))
      // Execution
      graph.removeNode('node1')
      // Assertion
      expect(graph.links).toHaveLength(0)
    })

    test('removes links where the node is the target', () => {
      // Declaration
      const graph = new Graph()
      graph.addNode(new GraphNode('node1'))
      graph.addNode(new GraphNode('node2'))
      graph.addLink(new GraphLink('node1', 'node2'))
      // Execution
      graph.removeNode('node2')
      // Assertion
      expect(graph.links).toHaveLength(0)
    })

    test('does nothing when the node does not exist', () => {
      // Declaration
      const graph = new Graph()
      // Execution
      // Assertion
      expect(() => graph.removeNode('node1')).not.toThrow()
    })
  })

  // hasNode //

  describe('hasNode', () => {

    test('returns true when the node exists', () => {
      // Declaration
      const graph = new Graph()
      graph.addNode(new GraphNode('node1'))
      // Execution
      const result = graph.hasNode('node1')
      // Assertion
      expect(result).toBe(true)
    })

    test('returns false when the node does not exist', () => {
      // Declaration
      const graph = new Graph()
      // Execution
      const result = graph.hasNode('node1')
      // Assertion
      expect(result).toBe(false)
    })
  })

  // getNode //

  describe('getNode', () => {

    test('returns the node when it exists', () => {
      // Declaration
      const graph = new Graph()
      const node = new GraphNode('node1')
      graph.addNode(node)
      // Execution
      const result = graph.getNode('node1')
      // Assertion
      expect(result).toBe(node)
    })

    test('returns null when the node does not exist', () => {
      // Declaration
      const graph = new Graph()
      // Execution
      const result = graph.getNode('node1')
      // Assertion
      expect(result).toBeNull()
    })
  })

  // addLink //

  describe('addLink', () => {

    test('adds a link to the graph', () => {
      // Declaration
      const graph = new Graph()
      const link = new GraphLink('node1', 'node2')
      // Execution
      graph.addLink(link)
      // Assertion
      expect(graph.links).toHaveLength(1)
      expect(graph.links[0]).toBe(link)
    })

    test('does not add a link when the same source and target are already present', () => {
      // Declaration
      const graph = new Graph()
      graph.addLink(new GraphLink('node1', 'node2'))
      // Execution
      graph.addLink(new GraphLink('node1', 'node2'))
      // Assertion
      expect(graph.links).toHaveLength(1)
    })
  })

  // removeLink //

  describe('removeLink', () => {

    test('removes an existing link from the graph', () => {
      // Declaration
      const graph = new Graph()
      graph.addLink(new GraphLink('node1', 'node2'))
      // Execution
      graph.removeLink('node1', 'node2')
      // Assertion
      expect(graph.links).toHaveLength(0)
    })

    test('does nothing when the link does not exist', () => {
      // Declaration
      const graph = new Graph()
      // Execution
      // Assertion
      expect(() => graph.removeLink('node1', 'node2')).not.toThrow()
    })
  })

  // hasLink //

  describe('hasLink', () => {

    test('returns true when the link exists', () => {
      // Declaration
      const graph = new Graph()
      graph.addLink(new GraphLink('node1', 'node2'))
      // Execution
      const result = graph.hasLink('node1', 'node2')
      // Assertion
      expect(result).toBe(true)
    })

    test('returns false when the link does not exist', () => {
      // Declaration
      const graph = new Graph()
      // Execution
      const result = graph.hasLink('node1', 'node2')
      // Assertion
      expect(result).toBe(false)
    })

    test('returns false for the reverse direction of an existing link', () => {
      // Declaration
      const graph = new Graph()
      graph.addLink(new GraphLink('node1', 'node2'))
      // Execution
      const result = graph.hasLink('node2', 'node1')
      // Assertion
      expect(result).toBe(false)
    })
  })

  // getNeighbors //

  describe('getNeighbors', () => {

    test('returns the outgoing neighbor nodes', () => {
      // Declaration
      const graph = new Graph()
      const node1 = new GraphNode('node1')
      const node2 = new GraphNode('node2')
      graph.addNode(node1)
      graph.addNode(node2)
      graph.addLink(new GraphLink('node1', 'node2'))
      // Execution
      const result = graph.getNeighbors('node1')
      // Assertion
      expect(result).toEqual([node2])
    })

    test('does not return nodes linked in the reverse direction', () => {
      // Declaration
      const graph = new Graph()
      graph.addNode(new GraphNode('node1'))
      graph.addNode(new GraphNode('node2'))
      graph.addLink(new GraphLink('node1', 'node2'))
      // Execution
      const result = graph.getNeighbors('node2')
      // Assertion
      expect(result).toEqual([])
    })

    test('returns an empty array when the node has no outgoing links', () => {
      // Declaration
      const graph = new Graph()
      graph.addNode(new GraphNode('node1'))
      // Execution
      const result = graph.getNeighbors('node1')
      // Assertion
      expect(result).toEqual([])
    })

    test('returns an empty array when the node does not exist in the graph', () => {
      // Declaration
      const graph = new Graph()
      // Execution
      const result = graph.getNeighbors('node1')
      // Assertion
      expect(result).toEqual([])
    })
  })
})
