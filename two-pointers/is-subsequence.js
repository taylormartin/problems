const testCases = [
    { s: "abc", t: "ahbgdc", output: true },
    { s: "axc", t: "ahbgdc", output: false },
    { s: "b", t: "abc", output: true },
    { s: "abbc", t: "ahbdc", output: false }
];

// const isSub = (s, t) => {
//     if ( s.length > t.length) return false;
//     if ( s === t ) return true;

//     const sA = s.split('');
//     const tA = t.split('');

//     let li = 0;
//     let ri = tA.length - 1;
//     let checks = 0;

//     while(li <= ri) {
//         if (tA[li] === sA[0]) {
//             sA.splice(0, 1);
//         }
//         checks++;
//         if (sA.length === 0) return true;
//         if (checks == tA.length) return false;
//         if(tA[ri] === sA[sA.length - 1]) {
//             sA.splice(sA.length - 1, 1);
//         }
//         checks++;
//         if (sA.length === 0) return true;
//         if (checks == tA.length) return false;
//         li++;
//         ri--;
//     }

//     return false;
// };

var isSub = function(s, t) {

    if(s.length === 0) return true
    sIndex = 0;

    for(let i=0; i<t.length; i++){
        if(t[i] === s[sIndex]){
            sIndex++
        }
        if(sIndex === s.length) {
            return true
        }
    }

    

    return false
    
};

testCases.forEach(testCase => {
    const result = isSub(testCase.s, testCase.t);
    console.log(result === testCase.output);
});