function solution(date1, date2) {
    let day1 = Number(date1.join(''));
    let day2 = Number(date2.join(''));
    
    return day1 < day2 ? 1 : 0; 
}