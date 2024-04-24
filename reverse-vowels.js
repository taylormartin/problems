const testCases = [
    { input: 'hello', output: 'holle' },
    { input: 'leetcode', output: 'leotcede' },
    { input: ' ', output: ' ' }
];

var reverseVowels = function(s) {
    const regex = /[aeiou]/gi;
    const vowels = s.match(regex)?.reverse();
    const array = s.split("");
    for (let i = 0; i < array.length; i++) {
        if (array[i].match(regex) !== null) {
            array[i] = vowels.shift();
        }
    }
    return array.join('');
};

testCases.forEach(testCase => {
    const output = reverseVowels(testCase.input);
    console.log(output === testCase.output ? 'pass' : 'fail');
});