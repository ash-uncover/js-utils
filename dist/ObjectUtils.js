"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtils = void 0;
var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }
    ObjectUtils.nil = function (object) {
        return typeof object === 'undefined' || object === null;
    };
    ObjectUtils.getProperty = function (object, path) {
        return path.split('.').reduce(function (acc, element) {
            if (acc && typeof acc === 'object') {
                return acc[element];
            }
            return undefined;
        }, object);
    };
    ObjectUtils.clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    ObjectUtils.arrayfy = function (object) {
        if (Array.isArray(object)) {
            return object;
        }
        return [object];
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;
