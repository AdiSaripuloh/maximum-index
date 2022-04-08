import { maximumIndex } from "./solution";

describe('Testing Maximum Index Reached', () => {
    interface testCase {
        name: string
        params: {
            steps: number
            badIndex: number
        }
        want: number
    }
    let testCases: testCase[] = [
        {
            name: "Example",
            params: {
                steps: 4,
                badIndex: 6
            },
            want: 9
        },
        {
            name: "Sample Usecase",
            params: {
                steps: 3,
                badIndex: 3
            },
            want: 5
        }
    ]
    testCases.forEach(tc => {
        test(tc.name, () => {
            expect(maximumIndex(tc.params.steps, tc.params.badIndex))
                .toBe(tc.want);
        });
    })
});