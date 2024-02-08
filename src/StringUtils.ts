
export class StringUtils {

  static capitalize(value: string) {
    if (value.length) {
      return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase()
    }
    return ''
  }

  static capitalizeFirst(value: string) {
    if (value.length) {
      return value.substring(0, 1).toUpperCase()
    }
    return ''
  }

  static replaceAll(value: string, replacePattern: string, replaceWith: string) {
    return value.split(replacePattern).join(replaceWith)
  }

  static getIndent(indent: number, char: string = '  ') {
    let result = ''
    for (let i = 0; i < indent; i++) {
      result += char
    }
    return result
  }
}