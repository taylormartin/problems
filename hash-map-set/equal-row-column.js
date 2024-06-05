const testCases = [
    { input: [[3, 2, 1], [1, 7, 6], [2, 7, 7]], output: 1 },
    { input: [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]], output: 3 }
];

var equalPairs = function (grid) {
    let sideLength = grid.length;
    let equalPairs = 0;

    for (let row = 0; row < sideLength; row++) {
        // console.log('next row');
        for (let column = 0; column < sideLength; column++) {
            // console.log('next column');
            for (let i = 0; i < sideLength; i++) {
                // console.log(`row ${grid[row][i]} col ${grid[i][column]}`)
                if (grid[row][i] !== grid[i][column]) {
                    break;
                } else if (i === sideLength - 1) {
                    // console.log('equal');
                    equalPairs++;
                }
            }
        }
    }

    return equalPairs;
};

testCases.forEach(testCase => {
    const result = equalPairs(testCase.input);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});