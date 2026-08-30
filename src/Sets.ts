
export class Sets {
  static toSet<T>(array: T[]): T[] {
    return array.reduce((acc: T[], element: T) => {
      if (!acc.includes(element)) {
        acc.push(element)
      }
      return acc
    }, [])
  }

  static add<T>(set: T[], ...elements: T[]): T[] {
    elements.forEach((element) => {
      if (!set.includes(element)) {
        set.push(element)
      }
    })
    return set
  }

  static remove<T>(set: T[], ...elements: T[]): T[] {
    elements.forEach((element) => {
      const index = set.indexOf(element)
      if (index !== -1) {
        set.splice(index, 1)
      }
    })
    return set
  }

  static merge<T>(set1: T[], set2: T[]): T[] {
    return Sets.toSet(set1.concat(set2))
  }
}
