const testCases = [
    { gain: [-5,1,5,0,-7], output: 1 },
    { gain: [-4,-3,-2,-1,4,3,2], output: 0 }
];

function largestAltitude(gain) {
    let highestPoint = 0;
    let currentPoint = 0;
    for (let i = 0; i < gain.length; i++) {
        currentPoint = currentPoint + gain[i];
        highestPoint = Math.max(highestPoint, currentPoint);
    }
    return highestPoint;
}

testCases.forEach(testCase => {
    const result = largestAltitude(testCase.gain);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});
