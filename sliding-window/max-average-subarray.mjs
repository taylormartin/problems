import { bigNums, bigK, bigAnswer } from "./bigNums.mjs";

const testCases = [
    { nums: [1, 12, -5, -6, 50, 3], k: 4, output: 12.75000 },
    { nums: [5], k: 1, output: 5 },
    { nums: [-1], k: 1, output: -1 },
];

function findMaxAveragev1(nums, k) {
    let lws = 0;
    let rws = nums.length - 1;
    let gA;
    do {
        let lwa = 0;
        for (i = lws; i < lws + k; i++) {
            lwa += nums[i];
        }
        lwa = lwa / k;

        if (lws + k - 1 === rws) {
            if (gA === undefined) {
                gA = lwa;
            } else if (lwa > gA) {
                gA = lwa;
            }
        } else {
            let rwa = 0;
            for (i = rws; i > rws - k; i--) {
                rwa += nums[i];
            }
            rwa = rwa / k;

            const max = Math.max(lwa, rwa);
            if (gA == undefined) {
                gA = max;
            } else if (max > gA) {
                gA = max;
            }
        }
        lws++;
        rws--;
    } while (lws + k - 1 <= rws)
    return gA;
};

function findMaxAveragev2(nums, k) {
    const startTime = performance.now();

    let greatestSum = -Infinity;
    let lwStart = 0;
    while (lwStart + k - 1 < nums.length) {
        let sum = 0;
        let twStart = lwStart;
        for (let i = 0; i < k; i++) {
            sum += nums[twStart];
            twStart++;  
        };
        if (sum > greatestSum) greatestSum = sum;
        lwStart++;
    }

    const endTime = performance.now();
    // Calculate runtime
    const runtime = endTime - startTime;
    // Log the runtime
    console.log("Runtime: " + runtime + " milliseconds");

    return greatestSum / k;
};

// solution someone submitted
var findMaxAveragev3 = function (nums, k) {
    const startTime = performance.now();
    let left = 0, right = k-1, sum = 0;
    for(let i=left; i<=right; i++) {
        sum += nums[i];
    }
    let temp = sum;
    while(right!==nums.length-1) {
        temp = temp - nums[left++];
        temp = temp + nums[++right];
        if(temp>sum) sum = temp;
    }

    const endTime = performance.now();
    // Calculate runtime
    const runtime = endTime - startTime;
    // Log the runtime
    console.log("Runtime: " + runtime + " milliseconds");

    return sum/k;
};  

console.log('EASY CASES');
testCases.forEach(testCase => {
    const result = findMaxAveragev3(testCase.nums, testCase.k);
    console.log(result === testCase.output ? 'PASS' : 'FAIL');
});

// console.log('HARD CASE');
// let result = findMaxAveragev2(bigNums, bigK);
// result = Math.round(result * 1e5) / 1e5;
// console.log('result', result);
// console.log('answer', bigAnswer);
// console.log(result === bigAnswer ? 'PASS' : 'FAIL');

// console.log('HARD CASE');
// result = findMaxAveragev3(bigNums, bigK);
// result = Math.round(result * 1e5) / 1e5;
// console.log('result', result);
// console.log('answer', bigAnswer);
// console.log(result === bigAnswer ? 'PASS' : 'FAIL');