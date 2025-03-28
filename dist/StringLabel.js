"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringLabel = void 0;
var StringUtils_1 = require("./StringUtils");
var StringLabel = /** @class */ (function () {
    function StringLabel(value, separator) {
        if (separator === void 0) { separator = ' '; }
        this._value = value;
        this._words = value.split(separator).map(function (w) { return w.toLowerCase(); }).filter(function (w) { return Boolean(w); });
    }
    Object.defineProperty(StringLabel.prototype, "words", {
        get: function () {
            return this._words;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringLabel.prototype, "camel", {
        get: function () {
            return this.words.map(function (w, index) { return (index === 0 ? w : StringUtils_1.StringUtils.capitalize(w)); }).join('');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringLabel.prototype, "pascal", {
        get: function () {
            return this.words.map(function (w) { return StringUtils_1.StringUtils.capitalize(w); }).join('');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringLabel.prototype, "worm", {
        get: function () {
            return this.words.map(function (w) { return w.toLowerCase(); }).join('_');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringLabel.prototype, "snake", {
        get: function () {
            return this.words.map(function (w) { return StringUtils_1.StringUtils.capitalize(w); }).join('_');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringLabel.prototype, "serpent", {
        get: function () {
            return this.words.map(function (w) { return w.toUpperCase(); }).join('_');
        },
        enumerable: false,
        configurable: true
    });
    return StringLabel;
}());
exports.StringLabel = StringLabel;
