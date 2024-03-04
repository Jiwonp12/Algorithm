function solution(dots) {
    const [A, B, C, D] = dots;
    
    if ((A[1] - B[1]) / (A[0] - B[0]) === (C[1] - D[1]) / (C[0] - D[0])) {
        return 1
    }
    if ((A[1] - C[1]) / (A[0] - C[0]) === (B[1] - D[1]) / (B[0] - D[0])) {
        return 1
    }
    if ((A[1] - D[1]) / (A[0] - D[0]) === (B[1] - C[1]) / (B[0] - C[0])) {
        return 1
    }
    return 0;
}