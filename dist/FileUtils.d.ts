export declare class FileUtils {
    static dumb(): string;
    static getExtension(file: File): string;
    static checkExtension(file: File, extentions: string[]): boolean;
    static checkSize(file: File, size: number): boolean;
}
