"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.createIntArray = function (size) {
        if (size === void 0) { size = 0; }
        var result = [];
        for (var i = 0; i < size; i++) {
            result.push(i);
        }
        return result;
    };
    ArrayUtils.shuffle = function (array) {
        if (array === void 0) { array = []; }
        var source = array.slice();
        var result = [];
        while (source.length) {
            var index = Math.floor(Math.random() * (source.length));
            result.push(source.splice(index, 1)[0]);
        }
        return result;
    };
    ArrayUtils.randomSubArray = function (array, items) {
        if (array === void 0) { array = []; }
        if (items === void 0) { items = 0; }
        var source = array.slice();
        var result = [];
        for (var i = 0; i < items; i++) {
            var index = Math.floor(Math.random() * (source.length));
            result.push(source.splice(index, 1)[0]);
        }
        return result;
    };
    ArrayUtils.randomElement = function (array) {
        if (array === void 0) { array = []; }
        if (array.length) {
            var index = Math.floor(Math.random() * (array.length));
            return array[index];
        }
        return null;
    };
    ArrayUtils.removeElement = function (array, element) {
        var index = array.indexOf(element);
        var result = array.slice();
        if (index !== -1) {
            result.splice(index, 1);
        }
        return result;
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;
