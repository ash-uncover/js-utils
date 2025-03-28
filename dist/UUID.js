"use strict";
/* tslint:disable:no-bitwise triple-equals */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = void 0;
// UUID generator
// courtesy of https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript (answer #2)
var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.next = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return UUID;
}());
exports.UUID = UUID;
