const testCases = [
    { input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], output: [1, 2, 3, 6, 9, 8, 7, 4, 5] },
    { input: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] }
];

function spiralOrder(matrix) {
    let colBegin = 0;
    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colEnd = matrix[0].length - 1;
    let spiralArray = [];

    while (colBegin <= colEnd && rowBegin <= rowEnd) {
        for (let i = colBegin; i <= colEnd; i++) {
            const item = matrix[rowBegin][i];
            spiralArray.push(item)
        }
        rowBegin++;

        for (let i = rowBegin; i <= rowEnd; i++) {
            const item = matrix[i][colEnd];
            spiralArray.push(item)
        }
        colEnd--;

        for (let i = colEnd; i >= colBegin; i--) {
            const item = matrix[i][rowEnd];
            spiralArray.push(item)
        }
        rowEnd--;

        for (let i = rowEnd; i >= rowBegin; i--) {
            const item =  matrix[colBegin][i];
            spiralArray.push(item)
        }
        colBegin++;
    }
    return spiralArray;
}

testCases.forEach(testCase => {
    function arraysAreEqual(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }
    const result = spiralOrder(testCase.input);
    console.log(arraysAreEqual(result, testCase.output) ? 'PASS' : 'FAIL');
    console.log(`received: ${result}`);
    console.log(`expected: ${testCase.output}`);
});
