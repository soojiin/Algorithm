function solution(new_id) {
    let newId = new_id
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '') // .match(/[a-z0-9-_.]/g).join('')
        .replace(/[.]+/g, '.') // .replace(/[.]{2,}/g, '.')
        .replace(/^[.]|[.]$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/[.]$/, '');
    
    return newId.length <= 2 ? newId.concat(newId.at(-1).repeat(3 - newId.length)) : newId;

}