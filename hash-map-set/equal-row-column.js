const testCases = [
    // { input: [[3, 2, 1], [1, 7, 6], [2, 7, 7]], output: 1 },
    { input: [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]], output: 3 }
];

var equalPairs = function (grid) {
    let sideLength = grid.length;
    let equalPairs = 0;

    let rowStart = 0;
    for (let i = 0; i < sideLength; i++) {
        let columnStart = 0;

        for (let i = 0; i < sideLength; i++) {

            if (grid[rowStart][i] !== grid[i][columnStart]) {
                columnStart++;
                break;
            }

            equalPairs++;

        }


        rowStart++;
    }

    return equalPairs;
};

testCases.forEach(testCase => {
    const result = equalPairs(testCase.input);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});