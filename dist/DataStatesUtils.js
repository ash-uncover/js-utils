"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStatesUtils = void 0;
var DataStates_1 = require("./DataStates");
var DataStatesUtils = /** @class */ (function () {
    function DataStatesUtils() {
    }
    DataStatesUtils.mergeDataStates = function (states) {
        if (states.length === 0)
            return DataStates_1.DataStates.NEVER;
        if (states.some(function (s) { return s === DataStates_1.DataStates.FAILURE; }))
            return DataStates_1.DataStates.FAILURE;
        if (states.some(function (s) { return s === DataStates_1.DataStates.OUTDATED; }))
            return DataStates_1.DataStates.OUTDATED;
        if (states.some(function (s) { return s === DataStates_1.DataStates.NEVER; }))
            return DataStates_1.DataStates.NEVER;
        if (states.some(function (s) { return s === DataStates_1.DataStates.FETCHING_FIRST; }))
            return DataStates_1.DataStates.FETCHING_FIRST;
        if (states.some(function (s) { return s === DataStates_1.DataStates.FETCHING; }))
            return DataStates_1.DataStates.FETCHING;
        return DataStates_1.DataStates.SUCCESS;
    };
    return DataStatesUtils;
}());
exports.DataStatesUtils = DataStatesUtils;
