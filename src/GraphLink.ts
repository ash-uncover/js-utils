export class GraphLink {
  private _source: string
  private _target: string

  constructor(source: string, target: string) {
    this._source = source
    this._target = target
  }

  get source() {
    return this._source
  }

  get target() {
    return this._target
  }
}
