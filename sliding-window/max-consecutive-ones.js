const testCases = [
    { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2, output: 6 },
    { nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k: 3, output: 10 },
];

function longestOnes(nums, k) {
    if (!nums.includes(0)) return nums.length;
    if (!nums.includes(1)) return 0;

    // build first window
    let largestWindow = 0;
    let slots = 0;
    let nextWindowEnd = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            //found a one
            largestWindow++;
        } else if (slots < k) {
            //found a zero
            slots++;
            largestWindow++;
        } else {
            //found a zero and out of slots
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
            // go down the list filling up slots with the zeros until k is equaled
            // add 1 to larget window each time
            while (slots < k && nextWindowEnd < nums.length) {
                if (nums[nextWindowEnd + 1] === 0) {
                    slots++;
                }
                nextWindowEnd++;
                largestWindow++;
            }
        } else if (slots === k) {
            //move next window end, see if it's a 1 and repeat until hitting a zero
            // add 1 to largest window each time
            // then set largestWindow and shift the window
            while (nums[nextWindowEnd + 1] !== 0 && nextWindowEnd < nums.length - 1) {
                nextWindowEnd++;
                largestWindow++;
            }
        }
        // slots are >= k
        // shift the window and go to next execution of while loop
        nextWindowStart++;
        nextWindowEnd++;
    }
    return largestWindow;
};

testCases.forEach(testCase => {
    const result = longestOnes(testCase.nums, testCase.k);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});
