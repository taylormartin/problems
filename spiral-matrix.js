const testCases = [
    { input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], output: [1, 2, 3, 6, 9, 8, 7, 4, 5] },
    { input: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] }
];

function spiralOrder(matrix) {
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    let spiralArray = [];

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            const item = matrix[top][i];
            spiralArray.push(item)
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            const item = matrix[i][right];
            spiralArray.push(item)
        }
        right--;

        for (let i = right; i >= left; i--) {
            const item = matrix[bottom][i];
            spiralArray.push(item)
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            const item =  matrix[i][left];
            spiralArray.push(item)
        }
        left++;
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
