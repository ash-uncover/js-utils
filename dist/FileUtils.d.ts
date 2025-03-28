export declare class FileUtils {
    /**
     * Determine a file extension
     * @param {object} file : a file
     * @returns {string} the file extension
     */
    static getExtension(file: File): string;
    /**
     * Check if a file extension is one of the specified
     * @param {object} file : a file
     * @param {array} extentions : a list of supported extension
     * @returns {boolean} true if the file extension match
     */
    static checkExtension(file: File, extentions: string[]): boolean;
    /**
     * Check if a file size does not exceed a limit
     * @param {object} file : a file
     * @param {number} size : the maximum size
     * @returns {boolean} true if the file size is below the limit
     */
    static checkSize(file: File, size: number): boolean;
}
