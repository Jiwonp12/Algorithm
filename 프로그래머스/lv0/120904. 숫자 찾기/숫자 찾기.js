function solution(num, k) { 
   let arr = String(num).split("")
   for (let i = 0; i < arr.length; i++) {
       if (Number(arr[i]) === k) {
           return Number(i)+1;
       }
   } return -1;
}