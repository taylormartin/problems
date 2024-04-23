const testCases = [
    { input: [1, 2, 3, 4], output: [24, 12, 8, 6] },
    { input: [-1, 1, 0, -3, 3], output: [0, 0, 9, 0, 0] }
];

// var productExceptSelf = function (nums) {
//     const newArray = [];
//     nums.forEach(() => {
//         newArray.push(1);
//     })
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < newArray.length; j++) {
//             if (i !== j) {
//                 newArray[j] = newArray[j] * nums[i];
//             }
//         }
//     }
//     return newArray;
// };


var productExceptSelf = function (nums) {
    const result = [];
    nums.forEach(() => {
        result.push(1);
    })
    
    let leftProduct = 1;
    for (let i = 0; i < result.length; i++) {
        result[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    let rightProduct = 1;
    for (let i = result.length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
};

testCases.forEach(testCase => {
    function arraysAreEqual(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }
    const result = productExceptSelf(testCase.input);
    console.log(arraysAreEqual(result, testCase.output));
});