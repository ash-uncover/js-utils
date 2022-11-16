export const createIntArray = (size: number = 0) => {
  const result = []
  for (let i = 0; i < size; i++) {
    result.push(i)
  }
  return result
}

export const shuffle = (array: any[] = []) => {
  const source = ([] as any[]).concat(array)
  const result: any[] = []
  while (source.length) {
    const index = Math.floor(Math.random() * (source.length))
    result.push(source.splice(index, 1)[0])
  }
  return result
}

export const randomSubArray = (array: any[] = [], items: number = 0) => {
  const source = ([] as any[]).concat(array)
  const result: any[] = []
  for (let i = 0; i < items; i++) {
    const index = Math.floor(Math.random() * (source.length))
    result.push(source.splice(index, 1)[0])
  }
  return result
}

export const removeElement = (array: any[], element: any) => {
  const index = array.indexOf(element)
  let result = array.slice()
  if (index !== -1) {
    result.splice(index, 1)
  }
  return result
}
