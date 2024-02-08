export class EncodeUtils {
  static encode(value = '') {
    return Buffer.from(value).toString('base64')
  }

  static decode(value = '') {
    return Buffer.from(value, 'base64').toString()
  }

  static encodeBasicHeader(username = '', password = '') {
    const decoded = `${username}:${password}`
    const encoded = EncodeUtils.encode(decoded)
    return `Basic ${encoded}`
  }

  static decodeBasicHeader(header = '') {
    const encoded = header.split('Basic ').join('')
    const decoded = EncodeUtils.decode(encoded)
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
}