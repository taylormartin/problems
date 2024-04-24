testCases = [
    {heights: [1,8,6,2,5,4,8,3,7], expected: 49},
    {heights: [1,1], expected: 1}
];

const maxArea = (height) => {
    let lp = 0;
    let rp = height.length - 1;
    let maxArea = 0;
    while (lp < rp) {
        const area = (rp - lp) * Math.min(height[lp], height[rp]);
        if (area > maxArea) maxArea = area;
        if (height[lp] > height[rp]) {
            rp--;
        } else {
            lp++;
        }
    }
    return maxArea;
};

testCases.forEach(testCase => {
    const received = maxArea(testCase.heights);
    console.log(received === testCase.expected ? 'pass' : 'fail');
});