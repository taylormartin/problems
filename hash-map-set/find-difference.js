const testCases = [
    { nums1: [1, 2, 3], nums2: [2, 4, 6], output: [[1, 3], [4, 6]] },
    { nums1: [1, 2, 3, 3], nums2: [1, 1, 2, 2], output: [[3], []] }
]

var findDifference = function (nums1, nums2) {
    const set = new Set([...nums1, ...nums2]);
    const a1 = [], a2 = [];
    set.forEach(v => {
        if (nums1.includes(v) && !nums2.includes(v)) {
            a1.push(v)
        } else if (!nums1.includes(v) && nums2.includes(v)) {
            a2.push(v)
        }
    });
    return [a1, a2];
}

testCases.forEach(testCase => {
    const result = findDifference(testCase.nums1, testCase.nums2);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});