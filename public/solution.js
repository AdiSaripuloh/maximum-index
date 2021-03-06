"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximumIndex = void 0;
// maximumIndex is the function that can find the maximum index that can be
// reached from index 0.
var maximumIndex = function (steps, badIndex) {
    // Initial
    var i = -1;
    var j = 1;
    // Maximum looping is N+1 (when meet bad index).
    for (var step = 1; step <= steps; step++) {
        if ((i + step) === badIndex) {
            steps++;
            continue;
        }
        i += j;
        j++;
    }
    // prevent return negative 1.
    return i >= 0 ? i : 0;
};
exports.maximumIndex = maximumIndex;
