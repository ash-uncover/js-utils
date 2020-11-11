export const encode = (value = '') => {
  return Buffer.from(value).toString('base64')
}

export const decode = (value = '') => {
  return Buffer.from(value, 'base64').toString()
}

export const encodeBasicHeader = (username = '', password = '') => {
  const decoded = `${username}:${password}`
  const encoded = encode(decoded)
  return `Basic ${encoded}`
}

export const decodeBasicHeader = (header = '') => {
  const encoded = header.split('Basic ').join('')
  const decoded = decode(encoded)
  const values = decoded.split(':')
  if (values.length === 2) {
    return {
      username: values[0],
      password: values[1]
    }
  } else {
    return {
      username: null,
      password: null
    }
  }
}