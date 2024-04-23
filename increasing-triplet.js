const testCases = [
    { input: [20, 100, 10, 12, 5, 13], output: true },
    { input: [5, 4, 3, 2, 1], output: false },
];

const increasingTriplet = (nums) => {
    let smallestToLeft = [nums[0]];
    let smallest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        smallestToLeft[i] = smallest;
        if (nums[i] < smallest) {
            smallest = nums[i];
        }
    }

    let largestToRight = [nums[nums.length - 1]];
    let largest = nums[nums.length - 1];
    for (let j = nums.length - 1; j >= 0; j--) {
        largestToRight[j] = largest
        if (nums[j] > largest) {
            largest = nums[j]
        }
    }

    for (let i = 1; i <= nums.length - 2; i++) {
        if (smallestToLeft[i] < nums[i] && nums[i] < largestToRight[i]) {
            return true;
        }
    }
    return false;
};

testCases.forEach(testCase => {
    const output = increasingTriplet(testCase.input);
    console.log(output === testCase.output ? 'pass' : 'fail');
});