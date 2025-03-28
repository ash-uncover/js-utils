"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncodeUtils = void 0;
var EncodeUtils = /** @class */ (function () {
    function EncodeUtils() {
    }
    EncodeUtils.encode = function (value) {
        if (value === void 0) { value = ''; }
        return Buffer.from(value).toString('base64');
    };
    EncodeUtils.decode = function (value) {
        if (value === void 0) { value = ''; }
        return Buffer.from(value, 'base64').toString();
    };
    EncodeUtils.encodeBasicHeader = function (username, password) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        var decoded = "".concat(username, ":").concat(password);
        var encoded = EncodeUtils.encode(decoded);
        return "Basic ".concat(encoded);
    };
    EncodeUtils.decodeBasicHeader = function (header) {
        if (header === void 0) { header = ''; }
        var encoded = header.split('Basic ').join('');
        var decoded = EncodeUtils.decode(encoded);
        var values = decoded.split(':');
        if (values.length === 2) {
            return {
                username: values[0],
                password: values[1]
            };
        }
        else {
            return {
                username: null,
                password: null
            };
        }
    };
    return EncodeUtils;
}());
exports.EncodeUtils = EncodeUtils;
