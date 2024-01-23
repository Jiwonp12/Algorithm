function solution(my_string) {
    return Array.from(my_string, (_, i) => my_string.slice(i)).sort();
}