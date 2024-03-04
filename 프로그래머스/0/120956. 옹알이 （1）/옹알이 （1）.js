function solution(babbling) {
    let result = [];
    
    for (let i of babbling) {
        while (i.startsWith('aya') || i.startsWith('ye') || i.startsWith('woo') || i.startsWith('ma')) {
            if (i.startsWith('aya')) i = i.split('aya').join('')
            if (i.startsWith('ye')) i = i.split('ye').join('')
            if (i.startsWith('woo')) i = i.split('woo').join('')
            if (i.startsWith('ma')) i = i.split('ma').join('')
        }
        result.push(i)
    }
    return result.filter(str => str === '').length;
}