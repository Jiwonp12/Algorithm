function solution(myString, pat) {
    let idx = myString.lastIndexOf(pat);
    
    return myString.substring(0, idx) + pat;
}