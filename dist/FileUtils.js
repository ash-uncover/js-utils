"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUtils = void 0;
var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    /**
     * Determine a file extension
     * @param {object} file : a file
     * @returns {string} the file extension
     */
    FileUtils.getExtension = function (file) {
        var name = file.name;
        return name.substring(name.lastIndexOf('.') + 1).toLowerCase();
    };
    /**
     * Check if a file extension is one of the specified
     * @param {object} file : a file
     * @param {array} extentions : a list of supported extension
     * @returns {boolean} true if the file extension match
     */
    FileUtils.checkExtension = function (file, extentions) {
        return (extentions).indexOf(FileUtils.getExtension(file)) !== -1;
    };
    /**
     * Check if a file size does not exceed a limit
     * @param {object} file : a file
     * @param {number} size : the maximum size
     * @returns {boolean} true if the file size is below the limit
     */
    FileUtils.checkSize = function (file, size) {
        return file.size <= size;
    };
    return FileUtils;
}());
exports.FileUtils = FileUtils;
