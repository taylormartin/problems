testCases = [
    { input: "the sky is blue", output: "blue is sky the" },
    {input: "  hello world  ", output: "world hello"},
    {input: " a good   example  ", output: "example good a"}
];

const reverseWords = (s) => {
    return s.split(/ +/g).reverse().join(' ').trim();
};

// const reverseWords = (s) => {
//     return s.split(/(?<=\S) +| +(?=\S)/g).reverse().join(' ');
// };

// const reverseWords = (s) => {
//     const array = s.match(/\S+/g);
//     const reversed = array.reverse()
//     const joined = reversed.join(' ');
//     const trimmed = joined.trim();
//     return trimmed;
// };

// const reverseWords = (s) => {
//     const array = s.split(" ");
//     const filtered = array.filter((i)=>i!=="");
//     return filtered.reverse().join(" ");
// };

testCases.forEach(testCase => {
    const result = reverseWords(testCase.input);
    console.log(result);
    console.log(result === testCase.output ? 'pass' : 'fail');
});