"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadUtils = void 0;
var DownloadUtils = /** @class */ (function () {
    function DownloadUtils() {
    }
    DownloadUtils.downloadJson = function (filename, content) {
        var blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
        var href = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.download = filename;
        link.target = '_blank';
        link.href = href;
        link.click();
        URL.revokeObjectURL(href);
    };
    return DownloadUtils;
}());
exports.DownloadUtils = DownloadUtils;
