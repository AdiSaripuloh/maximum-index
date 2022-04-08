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
// example test case from example
var example = function () {
    var steps = 4;
    var badIndex = 6;
    var maxIndex = maximumIndex(steps, badIndex);
    console.log("Example");
    console.log("The maximum index that can be reached is ".concat(maxIndex, "."));
};
// sampleCase test case from sample case
var sampleCase = function () {
    var steps = 3;
    var badIndex = 3;
    var maxIndex = maximumIndex(steps, badIndex);
    console.log("Sample Case");
    console.log("The maximum index that can be reached is ".concat(maxIndex, "."));
};
example();
sampleCase();
