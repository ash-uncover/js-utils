"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUtils = void 0;
var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    FileUtils.getExtention = function (file) {
        var name = file.name;
        return name.substring(name.lastIndexOf('.') + 1).toLowerCase();
    };
    FileUtils.checkExtention = function (file, extentions) {
        return (extentions).indexOf(FileUtils.getExtention(file)) !== -1;
    };
    FileUtils.checkSize = function (file, size) {
        return file.size <= size;
    };
    return FileUtils;
}());
exports.FileUtils = FileUtils;
