"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translation = {};
exports.getTransText = function (key, language) {
    if (!language || !exports.translation[key]) {
        return null;
    }
    return exports.translation[key][language];
};
//# sourceMappingURL=translation.js.map