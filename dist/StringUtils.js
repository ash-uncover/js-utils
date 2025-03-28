"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.capitalize = function (value) {
        if (value.length) {
            return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
        }
        return '';
    };
    StringUtils.capitalizeFirst = function (value) {
        if (value.length) {
            return value.substring(0, 1).toUpperCase();
        }
        return '';
    };
    StringUtils.replaceAll = function (value, replacePattern, replaceWith) {
        return value.split(replacePattern).join(replaceWith);
    };
    StringUtils.getIndent = function (indent, char) {
        if (char === void 0) { char = '  '; }
        var result = '';
        for (var i = 0; i < indent; i++) {
            result += char;
        }
        return result;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
