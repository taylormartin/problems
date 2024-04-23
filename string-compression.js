const testCases = [
    { input: ["a", "a", "b", "b", "c", "c", "c"], output: 6 },
    { input: ["a"], output: 1 },
    { input: ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"], output: 4 }
];

const compress = (chars) => {
    function charCountString(count) {
        return count > 1 ? count.toString() : "";
    }

    let currentChar = chars[0];
    let currentCharCount = 1;
    let firstEdited = false;
    for(let i = 1; i < chars.length; i++) {
        // at last index
        if ( i === chars.length - 1 ) {
            if (chars[i] !== currentChar) {
                chars[0] = chars[0] + currentChar + charCountString(currentCharCount) + chars[i];
            } else {
                currentCharCount++
                chars[0] = chars[0] + currentChar + charCountString(currentCharCount);
            }
        }

        if (chars[i] !== currentChar) {
            if (!firstEdited) {
                firstEdited = true;
                chars[0] = currentChar + charCountString(currentCharCount);
            } else {
                chars[0] = chars[0] + currentChar + charCountString(currentCharCount);
            }
            currentChar = chars[i];
            currentCharCount = 1;
        } else {
            currentCharCount++;
        }

        chars.splice(i,1);
    }
    console.log(chars);
    console.log(chars[0]);
    return chars[0].length;
};

testCases.forEach(testCase => {
    const output = compress(testCase.input);
    console.log(output === testCase.output ? `pass -> expected: ${testCase.output}, received: ${output}` : `fail -> expected: ${testCase.output}, received: ${output}`);
});