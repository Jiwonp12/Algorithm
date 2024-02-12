function solution(dots) {
    return (Math.max(...dots.map(x => x[0])) - Math.min(...dots.map(x => x[0]))) * (Math.max(...dots.map(x => x[1])) - Math.min(...dots.map(x => x[1])));
}