const testCases = [
  { word1: "abc", word2: "pqr" },
  { word1: "ab", word2: "pqrs" },
  { word1: "abcd", word2: "pq" },
  { word1: "abcd", word2: "" },
];

var mergeAlternately = function (word1, word2) {
  let newString = '';
  const [shortest, longest] = [word1, word2].sort( (w1, w2) => {w1.length - w2.length});
  const remainderIndexStart = shortest.length;
  for (let i = 0; i < shortest.length; i++) {
    newString = newString + word1.charAt(i) + word2.charAt(i);
  }
  const result = newString + longest.slice(remainderIndexStart, longest.length);
  return result;
};

testCases.forEach((testCase) => {
  const newString = mergeAlternately(testCase.word1, testCase.word2);
  console.log(newString);
});
