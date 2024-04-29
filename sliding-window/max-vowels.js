const testCases = [
    { letters: "abciiidef", k: 3, output: 3 },
    { letters: "aeiou", k: 2, output: 2 },
    { letters: "leetcode", k: 3, output: 2 }
];

function maxVowels(s, k) {
    const vowels = 'aeiou';
    const letters = s.split('');

    let maxVowelCount = 0;
    let lastVowelCount = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.includes(letters[i])) {
            maxVowelCount++;
            lastVowelCount++;
        }
    }
    if (maxVowelCount === k) return k;

    for (let i = 1; i <= letters.length - k; i++) {
        const removedLetter = letters[i - 1];
        const addedLetter = letters[i + k - 1 ];
        if (vowels.includes(removedLetter)) lastVowelCount--;
        if (vowels.includes(addedLetter))  lastVowelCount++;
        if (lastVowelCount > maxVowelCount) maxVowelCount = lastVowelCount;
        if (maxVowelCount === k) return k;
    }
    return maxVowelCount;
};

testCases.forEach(testCase => {
    const result = maxVowels(testCase.letters, testCase.k);
    console.log(`${result === testCase.output ? 'PASS' : 'FAIL'} | expected: ${testCase.output} | received: ${result}`);
});