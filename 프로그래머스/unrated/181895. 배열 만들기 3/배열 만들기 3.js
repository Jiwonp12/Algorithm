function solution(arr, intervals) {
    const a = intervals[0];
    const b = intervals[1];

    const aArr = arr.slice(a[0], a[1] + 1);
    const bArr = arr.slice(b[0], b[1] + 1);

    return [...aArr, ...bArr];
}
