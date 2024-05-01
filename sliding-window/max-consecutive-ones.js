const testCases = [
    // { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2, output: 6 },
    // { nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k: 3, output: 10 },
    // { nums: [0], k: 1, output: 1 },
    { nums: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], k: 2, output: 6 },
         //  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18
];

function longestOnes(nums, k) {
    if (!nums.includes(0)) return nums.length;

    let largestWindow = 0;
    let slots = 0;
    let nextWindowEnd = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            largestWindow++;
        } else if (slots < k) {
            slots++;
            largestWindow++;
        } else {
            nextWindowEnd = i;
            break;
        }
    }
    if (largestWindow === nums.length) return largestWindow;

    let nextWindowStart = 1;
    while (nextWindowEnd < nums.length) {
        if (nums[nextWindowStart - 1] === 0) slots--;
        if (nums[nextWindowEnd] === 0) slots++;

        if (slots < k) {
            while (slots < k && nextWindowEnd < nums.length) {
                if (nums[nextWindowEnd + 1] === 0) {
                    slots++;
                }
                nextWindowEnd++;
                largestWindow++;
            }
        } else if (slots === k) {
            while (nums[nextWindowEnd + 1] !== 0 && nextWindowEnd < nums.length - 1) {
                nextWindowEnd++;
                largestWindow++;
            }
        }
        nextWindowStart++;
        nextWindowEnd++;
    }
    return largestWindow;
};

function longestOnesv2(nums, k) {
    let pivot = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) k--;
        if (k < 0) {
            if (nums[pivot] === 0) k++;
            pivot++;
        }
    }
    return nums.length - pivot;
}

testCases.forEach(testCase => {
    const result = longestOnesv2(testCase.nums, testCase.k);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});
