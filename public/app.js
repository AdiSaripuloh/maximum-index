"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solution_1 = require("./solution");
// example test case from example
var example = function () {
    var steps = 4;
    var badIndex = 6;
    var maxIndex = (0, solution_1.maximumIndex)(steps, badIndex);
    console.log("Example");
    console.log("The maximum index that can be reached is ".concat(maxIndex, "."));
};
// sampleCase test case from sample case
var sampleCase = function () {
    var steps = 3;
    var badIndex = 3;
    var maxIndex = (0, solution_1.maximumIndex)(steps, badIndex);
    console.log("Sample Case");
    console.log("The maximum index that can be reached is ".concat(maxIndex, "."));
};
example();
sampleCase();
