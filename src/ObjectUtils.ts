export class ObjectUtils {

  static nil(object?: unknown) {
    return typeof object === 'undefined' || object === null
  }

  static getProperty(object: object, path: string): unknown {
    return path.split('.').reduce((acc: unknown, element: string) => {
      if (acc !== null && typeof acc === 'object') {
        return (acc as Record<string, unknown>)[element]
      }
      return undefined
    }, object)
  }

  static clone(object: object) {
    return JSON.parse(JSON.stringify(object))
  }

  static arrayfy<T>(object: T | T[]): T[] {
    if (Array.isArray(object)) {
      return object
    }
    return [object]
  }
}