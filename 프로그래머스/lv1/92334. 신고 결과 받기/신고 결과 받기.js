function solution(id_list, report, k) {
    // reported_obj = {신고 당한 사람 : [신고한 사람], }
    // 신고한 사람수 (= 신고당한 횟수)가 k 이상
    
    let reported_obj = {}, getMail = [];
    let result = new Array(id_list.length).fill(0);
 
    id_list.forEach(id => {
        reported_obj[id] = [];
    })
    
    report.forEach(el => { 
        el = el.split(' ');
        const [id, reported] = el;
    
        if (!reported_obj[reported].includes(id)) {
            reported_obj[reported].push(id);
        }
    })
    
    id_list.forEach((el, idx) => {
        if (reported_obj[el].length >= k) {
            reported_obj[el].forEach(id => getMail.push(id));
        }
    })
    
    for (let i = 0 ; i < id_list.length ; i++) {
        for (let mailId of getMail) {
            if (mailId === id_list[i]) {
                result[i]++;
            }
        }
    }
    
    return result;
}