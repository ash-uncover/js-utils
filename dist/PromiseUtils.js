"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUtils = void 0;
var DELAY = 0;
var PromiseUtils = /** @class */ (function () {
    function PromiseUtils() {
    }
    PromiseUtils.delayedPromise = function (promise, timeout) {
        if (timeout === void 0) { timeout = DELAY; }
        return Promise.all([
            promise,
            new Promise(function (resolve) { return setTimeout(resolve, timeout); })
        ])
            .then(function (result) {
            return result[0];
        })
            .catch(function (error) {
            throw error;
        });
    };
    return PromiseUtils;
}());
exports.PromiseUtils = PromiseUtils;
