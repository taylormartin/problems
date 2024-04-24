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
    while(chars.length > 1) {
        // at last index
        if ( chars.length === 2 ) {
            if (chars[1] !== currentChar) {
                chars[0] = chars[0] + currentChar + charCountString(currentCharCount) + chars[1];
            } else {
                currentCharCount++
                chars[0] = chars[0] + currentChar + charCountString(currentCharCount);
            }
        }

        if (chars[1] !== currentChar) {
            if (!firstEdited) {
                firstEdited = true;
                chars[0] = currentChar + charCountString(currentCharCount);
            } else {
                chars[0] = chars[0] + currentChar + charCountString(currentCharCount);
            }
            currentChar = chars[1];
            currentCharCount = 1;
        } else {
            currentCharCount++;
        }

        chars.splice(1,1)
    }
    chars = chars[0].split("")
    console.log(chars);
    return chars.length;
};

testCases.forEach(testCase => {
    const output = compress(testCase.input);
    console.log(output === testCase.output ? `pass -> expected: ${testCase.output}, received: ${output}` : `fail -> expected: ${testCase.output}, received: ${output}`);
});