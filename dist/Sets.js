"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sets = void 0;
var Sets = /** @class */ (function () {
    function Sets() {
    }
    Sets.toSet = function (array) {
        return array.reduce(function (acc, element) {
            if (!acc.includes(element)) {
                acc.push(element);
            }
            return acc;
        }, []);
    };
    Sets.add = function (set) {
        var elements = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            elements[_i - 1] = arguments[_i];
        }
        elements.forEach(function (element) {
            if (!set.includes(element)) {
                set.push(element);
            }
        });
        return set;
    };
    Sets.remove = function (set) {
        var elements = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            elements[_i - 1] = arguments[_i];
        }
        elements.forEach(function (element) {
            var index = set.indexOf(element);
            if (index !== -1) {
                set.splice(index, 1);
            }
        });
        return set;
    };
    Sets.merge = function (set1, set2) {
        return Sets.toSet(set1.concat(set2));
    };
    return Sets;
}());
exports.Sets = Sets;
