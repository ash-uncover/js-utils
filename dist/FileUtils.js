"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUtils = void 0;
var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    FileUtils.dumb = function () {
        return '';
    };
    FileUtils.getExtension = function (file) {
        var name = file.name;
        return name.substring(name.lastIndexOf('.') + 1).toLowerCase();
    };
    FileUtils.checkExtension = function (file, extentions) {
        return (extentions).indexOf(FileUtils.getExtension(file)) !== -1;
    };
    FileUtils.checkSize = function (file, size) {
        return file.size <= size;
    };
    return FileUtils;
}());
exports.FileUtils = FileUtils;
