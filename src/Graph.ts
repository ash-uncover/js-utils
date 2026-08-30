import { GraphLink } from './GraphLink'
import { GraphNode } from './GraphNode'

export class Graph {
  private _nodes: GraphNode[] = []
  private _links: GraphLink[] = []

  get nodes() {
    return this._nodes
  }

  get links() {
    return this._links
  }

  addNode(node: GraphNode) {
    if (!this.hasNode(node.id)) {
      this._nodes.push(node)
    }
  }

  removeNode(id: string) {
    this._nodes = this._nodes.filter(n => n.id !== id)
    this._links = this._links.filter(l => l.source !== id && l.target !== id)
  }

  hasNode(id: string) {
    return this._nodes.some(n => n.id === id)
  }

  getNode(id: string) {
    return this._nodes.find(n => n.id === id) ?? null
  }

  addLink(link: GraphLink) {
    if (!this.hasLink(link.source, link.target)) {
      this._links.push(link)
    }
  }

  removeLink(source: string, target: string) {
    this._links = this._links.filter(l => l.source !== source || l.target !== target)
  }

  hasLink(source: string, target: string) {
    return this._links.some(l => l.source === source && l.target === target)
  }

  getNeighbors(id: string) {
    return this._links
      .filter(l => l.source === id)
      .map(l => this.getNode(l.target))
      .filter((n): n is GraphNode => n !== null)
  }
}
