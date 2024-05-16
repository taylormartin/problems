const testCases = [
    { input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], output: [1, 2, 3, 6, 9, 8, 7, 4, 5] },
    { input: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] }
];

function spiralOrder (matrix) {

}

testCases.forEach(testCase => {
    const result = spiralOrder(testCase.input);
    console.log(result === testCase.output ? 'PASS' : 'FAIL');
    console.log(`received: ${result}`);
    console.log(`expected: ${testCase.output}`);
});
