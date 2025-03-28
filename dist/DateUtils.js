"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
var MIL_PER_SEC = 1000;
var SEC_PER_MIN = 60;
var MIL_PER_MIN = MIL_PER_SEC * SEC_PER_MIN;
var MIN_PER_HOU = 60;
var SEC_PER_HOU = SEC_PER_MIN * MIN_PER_HOU;
var MIL_PER_HOU = MIL_PER_MIN * MIN_PER_HOU;
var HOU_PER_DAY = 24;
var MIN_PER_DAY = MIN_PER_HOU * HOU_PER_DAY;
var SEC_PER_DAY = SEC_PER_HOU * HOU_PER_DAY;
var MIL_PER_DAY = MIL_PER_HOU * HOU_PER_DAY;
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.durationToHumanTime = function (duration) {
        return {
            millis: duration % MIL_PER_SEC,
            seconds: Math.floor(duration / MIL_PER_SEC) % SEC_PER_MIN,
            minutes: Math.floor(duration / MIL_PER_MIN) % MIN_PER_HOU,
            hours: Math.floor(duration / MIL_PER_HOU)
        };
    };
    DateUtils.normalizeTime = function (value) {
        return "".concat(value).padStart(2, '0');
    };
    DateUtils.dateString = function (date) {
        var year = DateUtils.normalizeTime(date.getFullYear());
        var month = DateUtils.normalizeTime(date.getMonth());
        var day = DateUtils.normalizeTime(date.getDate());
        var hours = DateUtils.normalizeTime(date.getHours());
        var minutes = DateUtils.normalizeTime(date.getMinutes());
        var seconds = DateUtils.normalizeTime(date.getSeconds());
        return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
    };
    DateUtils.nowString = function () {
        return DateUtils.dateString(new Date(Date.now()));
    };
    DateUtils.TimeConstants = {
        MIL_PER_SEC: MIL_PER_SEC,
        SEC_PER_MIN: SEC_PER_MIN,
        MIL_PER_MIN: MIL_PER_MIN,
        MIN_PER_HOU: MIN_PER_HOU,
        SEC_PER_HOU: SEC_PER_HOU,
        MIL_PER_HOU: MIL_PER_HOU,
        HOU_PER_DAY: HOU_PER_DAY,
        MIN_PER_DAY: MIN_PER_DAY,
        SEC_PER_DAY: SEC_PER_DAY,
        MIL_PER_DAY: MIL_PER_DAY
    };
    return DateUtils;
}());
exports.DateUtils = DateUtils;
