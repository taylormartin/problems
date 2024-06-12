const testCases = [
    { input: [1, 2, 3, 1], output: 2 },
    { input: [1, 2, 1, 3, 5, 6, 4], output: 5 }
];

function findPeakElement(nums) {
    let left = 0, right = nums.length-1, mid;
    
    while(left < right) {
        mid = Math.floor((right+left)/2);
        if(nums[mid] > nums[mid+1]) right = mid;
        else left = mid+1;
    }
    return left;
}

testCases.forEach(testCase => {
    const result = findPeakElement(testCase.input);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});