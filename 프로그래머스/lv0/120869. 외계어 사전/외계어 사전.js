function solution(spell, dic) {
     let spe = spell.sort().join('')
     let di = dic.map(x => x.split('').sort().join(''));
     return di.includes(spe) ? 1 : 2
   


}