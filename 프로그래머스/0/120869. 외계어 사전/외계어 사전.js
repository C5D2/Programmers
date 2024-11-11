function solution(spell, dic) {
    return dic.some(word => spell.every(char => word.includes(char))) ? 1 : 2;
}