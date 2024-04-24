testCases = [
    {nums: [1,2,3,4], k: 5, expected: 2},
    {nums: [3,1,3,4,3], k: 6, expected: 1}
];

const maxOperations = (nums, k) => {
    
};

testCases.forEach(testCase => {
    const received = maxOperations(testCase.nums, testCase.k);
    console.log(received === testCase.expected ? 'pass' : 'fail');
});