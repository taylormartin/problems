const testCases = [
    {candies: [2,3,5,1,3], extraCandies: 3, output: [true,true,true,false,true]}
];

var kidsWithCandies = function(candies, extraCandies) {
    let mostCandiesAtStart = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > mostCandiesAtStart) {
            mostCandiesAtStart = candies[i];
        }
    }
    let newArray = [];
    for (let i = 0; i < candies.length; i++) {
        newArray.push(candies[i] + extraCandies >= mostCandiesAtStart);
    }
    return newArray;
};

testCases.forEach(testCase => {
    function arraysAreEqual(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }
    const result = kidsWithCandies(testCase.candies, testCase.extraCandies);
    console.log(arraysAreEqual(result, testCase.output));
})