export class DownloadUtils {

  static downloadJson(filename: string, content: unknown) {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' })
    const href = URL.createObjectURL(blob)
    const link: HTMLAnchorElement = document.createElement('a')
    link.download = filename
    link.target = '_blank'
    link.href = href
    link.click()
    URL.revokeObjectURL(href)
  }
}