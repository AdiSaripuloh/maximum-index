// maximumIndex is the function that can find the maximum index that can be
// reached from index 0.
const maximumIndex = (steps: number, badIndex: number) => {
    // Initial
    let i = -1;
    let j = 1;

    // Maximum looping is N+1 (when meet bad index).
    for (let step = 1; step <= steps; step++) {
        if ((i + step) === badIndex) {
            steps++;
            continue;
        }
        i += j;
        j++;
    }

    // prevent return negative 1.
    return i >= 0 ? i : 0;
}

// example test case from example
const example = () => {
    let steps = 4;
    let badIndex = 6;
    let maxIndex = maximumIndex(steps, badIndex);
    console.log("Example");
    console.log(`The maximum index that can be reached is ${maxIndex}.`);
}

// sampleCase test case from sample case
const sampleCase = () => {
    let steps = 3;
    let badIndex = 3;
    let maxIndex = maximumIndex(steps, badIndex);
    console.log("Sample Case");
    console.log(`The maximum index that can be reached is ${maxIndex}.`);
}

example();
sampleCase();