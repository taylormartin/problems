const testCases = [
    { input: [1, 2, 3, 1], output: 2 },
    { input: [1, 2, 1, 3, 5, 6, 4], output: 5 }
];

function findPeakElement(nums) {

}

testCases.forEach(testCase => {
    const result = findPeakElement(testCase.input);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});