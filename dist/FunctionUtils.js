"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionUtils = void 0;
/* Extracts the name of a function parameters
 * Courtesy of https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
 */
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
var FunctionUtils = /** @class */ (function () {
    function FunctionUtils() {
    }
    FunctionUtils.getParamNames = function (func) {
        var fnStr = func.toString().replace(STRIP_COMMENTS, '');
        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
        if (result === null) {
            return [];
        }
        return result;
    };
    return FunctionUtils;
}());
exports.FunctionUtils = FunctionUtils;
