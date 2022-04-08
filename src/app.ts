import { maximumIndex} from "./solution";

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