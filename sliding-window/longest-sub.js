/**
 * Given a binary array nums, you should delete one element from it.
 * Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
 */

const testCases = [
    { nums: [1, 1, 0, 1], output: 3 },
    { nums: [1, 1, 1], output: 2 },
    { nums: [0, 0, 0], output: 0 },
    { nums: [0, 1, 1, 1], output: 3 },
    { nums: [0, 1, 1, 1, 0, 1, 1, 0, 1, 0], output: 5 }
];

var longestSubarray = function (nums) {
    let ws = 0, lw = 0, zc = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zc++;
        if (zc > 1) {
            if (nums[ws] === 0) zc--;
            ws++;
        }
        if (zc <= 1) {
            lw = Math.max(lw, i - ws);
        }
    }
    return lw;
};

testCases.forEach(testCase => {
    const result = longestSubarray(testCase.nums);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});
