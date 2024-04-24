testCases = [
    {input: "the sky is blue", output: "blue is sky the"},
    // {input: "  hello world  ", output: "world hello"},
    // {input: "a good   example", output: "example good a"}
];

const reverseWords = (s) => {
    let fakeindex = 0;
    const regex = /[a-z]/gi;
    let array = s.split('');
    let inwardIndex = 0;
    let backwardIndex = array.length - 1;
    let movingInwardWord = false;
    let movingBackwardWord = false;
    let lengthOfInwardWord = 0;
    while (inwardIndex !== backwardIndex && fakeindex <= 1) {
        fakeindex++;
        const firstChar = array[inwardIndex];
        const lastChar = array[backwardIndex];
        if(firstChar.match(regex)) {
            array[backwardIndex] = firstChar;
            movingBackwardWord = true;
            console.log('swapFirst', array);
        }
        if(lastChar.match(regex)) {
            array[inwardIndex] = lastChar;
            movingInwardWord = true;
            wordStartIndex = inwardIndex;
            lengthOfInwardWord++;
            backwardIndex--;
            console.log('swapLast', array);
        }
    }
    return s;
};

testCases.forEach(testCase => {
    const result = reverseWords(testCase.input);
    console.log(result === testCase.output ? 'pass' : 'fail');
});