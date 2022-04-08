// maximumIndex is the function that can find the maximum index that can be
// reached from index 0.
const maximumIndex = (steps: number, badIndex: number): number => {
    // Initial
    let i: number = -1;
    let j: number = 1;

    // Maximum looping is N+1 (when meet bad index).
    for (let step: number = 1; step <= steps; step++) {
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
const example = (): void => {
    let steps: number = 4;
    let badIndex: number = 6;
    let maxIndex: number = maximumIndex(steps, badIndex);
    console.log("Example");
    console.log(`The maximum index that can be reached is ${maxIndex}.`);
}

// sampleCase test case from sample case
const sampleCase = (): void => {
    let steps: number = 3;
    let badIndex: number = 3;
    let maxIndex: number = maximumIndex(steps, badIndex);
    console.log("Sample Case");
    console.log(`The maximum index that can be reached is ${maxIndex}.`);
}

example();
sampleCase();