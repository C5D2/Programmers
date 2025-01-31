function solution(num_list) {
    let oddAdd = '';
    let evenAdd = '';
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 !== 0) {
            oddAdd += num_list[i];
        } else if(num_list[i] % 2 === 0) {
            evenAdd += num_list[i];
        }
    }
    return Number(oddAdd) + Number(evenAdd);
}