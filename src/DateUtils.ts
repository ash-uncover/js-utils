export const dateString = (date: Date) => {
  const year = `${date.getFullYear()}`.padStart(2, '0')
  const month = `${date.getMonth()}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  const hours = `${date.getHours()}`.padStart(2, '0')
  const minutes = `${date.getMinutes()}`.padStart(2, '0')
  const seconds = `${date.getSeconds()}`.padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export const nowString = () => {
  return dateString(new Date(Date.now()))
}
