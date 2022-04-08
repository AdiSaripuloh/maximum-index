// maximumIndex is the function that can find the maximum index that can be
// reached from index 0.
export const maximumIndex = (steps: number, badIndex: number): number => {
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
