const testCases = [
    // { word1: "ABCABC", word2: "ABC", solution: "ABC" },
    { word1: "ABABAB", word2: "ABAB", solution: "AB" },
    // { word1: "LEET", word2: "CODE", solution: "" },
    // { word1: "ABABABABABAB", word2: "ABABAB", solution: "ABABAB" },
];

var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    let a = str1.length
    let b = str2.length

    while (b) {
        let temp = b
        b = a % b
        a = temp
    }
    return str1.substring(0, a)
};

testCases.forEach(testCase => {
    const output = gcdOfStrings(testCase.word1, testCase.word2);
    console.log(output === testCase.solution);
});
