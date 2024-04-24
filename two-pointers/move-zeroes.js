const testCases = [
    { input: [0,1,0,3,12], output: [1,3,12,0,0]},
    { input: [0], output: [0]},
];

// if array length is 1 return array

var moveZeroes = function (nums) {
    if ( nums.length < 2 ) return nums;
    let li = 0;
    let ri = nums.length - 1;
    while (ri >= li) {
        if (nums[ri] === 0 && ri < nums.length - 1) {
            nums.splice(ri, 1);
            nums.push(0);
        } else {
            ri--;
        }
        if (nums[li] === 0) {
            nums.splice(li, 1);
            nums.push(0);
            ri--;
        } else {
            li++;
        }
    }
    return nums;
};


testCases.forEach(testCase => {
    function arraysAreEqual(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }
    const result = moveZeroes(testCase.input);
    console.log(arraysAreEqual(result, testCase.output));
});