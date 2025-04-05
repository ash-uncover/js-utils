export class FileUtils {

  static getExtention(file: File): string {
    const name = file.name
    return name.substring(name.lastIndexOf('.') + 1).toLowerCase()
  }

  static checkExtention(file: File, extentions: string[]): boolean {
    return (extentions).indexOf(FileUtils.getExtention(file)) !== -1
  }

  static checkSize(file: File, size: number): boolean {
    return file.size <= size
  }
}
