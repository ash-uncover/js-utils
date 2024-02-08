export class ObjectUtils {

  static nil(object?: any) {
    return typeof object === 'undefined' || object === null
  }

  static getProperty(object: object, path: string) {
    return path.split('.').reduce((acc: any, element: string) => {
      if (acc && typeof acc === 'object') {
        return acc[element]
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