export class FileUtils {

  static dumb() {
    return ''
  }

  static getExtension(file: File): string {
    const name = file.name
    return name.substring(name.lastIndexOf('.') + 1).toLowerCase()
  }

  static checkExtension(file: File, extentions: string[]): boolean {
    return (extentions).indexOf(FileUtils.getExtension(file)) !== -1
  }

  static checkSize(file: File, size: number): boolean {
    return file.size <= size
  }
}
