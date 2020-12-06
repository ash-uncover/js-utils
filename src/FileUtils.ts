/**
 * Determine a file extension
 * @param {object} file : a file
 * @returns {string} the file extension
 */
export const getExtension = (file: File) => {
  const name = file.name
  return name.substring(name.lastIndexOf('.') + 1).toLowerCase()
}

/**
 * Check if a file extension is one of the specified
 * @param {object} file : a file
 * @param {array} extentions : a list of supported extension
 * @returns {boolean} true if the file extension match
 */
export const checkExtension = (file: File, extentions: string[]) => {
  return (extentions).indexOf(getExtension(file)) !== -1
}

/**
 * Check if a file size does not exceed a limit
 * @param {object} file : a file
 * @param {number} size : the maximum size
 * @returns {boolean} true if the file size is below the limit
 */
export const checkSize = (file: File, size: number) => {
  return file.size <= size
}
