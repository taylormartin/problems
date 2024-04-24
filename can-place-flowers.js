testCases = [
    // {flowerbed: [1,0,1,0,1,0,1], n: 1, expected: false},
    {flowerbed: [1,0,0,0,1,0,0], n: 2, expected: true}
];

var canPlaceFlowers = function(flowerbed, n) {
    let additionalSpots = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        let prev = flowerbed[i-1] === undefined ? 0 : flowerbed[i-1];
        let next = flowerbed[i+1] === undefined ? 0 : flowerbed[i+1];
        if (prev + next + flowerbed[i] === 0) {
            flowerbed[i] = 1;
            additionalSpots++;
        }
    }
    return additionalSpots >= n;
};

testCases.forEach(testCase => {
    const output = canPlaceFlowers(testCase.flowerbed, testCase.n);
    console.log(output === testCase.expected ? 'pass' : 'fail');
});