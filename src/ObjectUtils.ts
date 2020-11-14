export const getProperty = (object: object, path: string) => {
  return path.split('.').reduce((acc: any, element: string) => {
    if (acc && typeof acc === 'object') {
      return acc[element]
    }
    return undefined
  }, object)
}

export const clone = (object: object) => {
  return JSON.parse(JSON.stringify(object))
}
