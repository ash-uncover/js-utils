export const capitalize = (value: string) => {
  if (value.length) {
    return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase()
  }
  return ''
}

export const replaceAll = (value: string, replacePattern: string, replaceWith: string) => {
  return value.split(replacePattern).join(replaceWith)
}

export const easenSearch = (value: string) => {
  let result = value.toLowerCase()

  result = replaceAll(result, 'à', 'a')
  result = replaceAll(result, 'é', 'e')
  result = replaceAll(result, 'è', 'e')
  result = replaceAll(result, 'ê', 'e')
  result = replaceAll(result, 'î', 'i')
  result = replaceAll(result, 'ï', 'i')
  result = replaceAll(result, 'ô', 'o')
  result = replaceAll(result, 'ö', 'o')
  result = replaceAll(result, 'û', 'u')
  result = replaceAll(result, 'ù', 'u')

  return result
}