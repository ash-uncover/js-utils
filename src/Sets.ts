
export class Sets {
  static toSet(array: any[]) {
    return array.reduce((acc, element) => {
      if (!acc.includes(element)) {
        acc.push(element)
      }
      return acc
    }, [])
  }

  static add(set: any[], ...elements: any[]) {
    elements.forEach((element) => {
      if (!set.includes(element)) {
        set.push(element)
      }
    })
    return set
  }

  static remove(set: any[], ...elements: any[]) {
    elements.forEach((element) => {
      const index = set.indexOf(element)
      if (index !== -1) {
        set.splice(index, 1)
      }
    })
    return set
  }

  static merge(set1: any[], set2: any[]) {
    return Sets.toSet(set1.concat(set2))
  }
}
