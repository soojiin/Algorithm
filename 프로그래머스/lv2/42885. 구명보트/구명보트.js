function solution(people, limit) {
    let sortedPeople = people.sort((a, b) => a - b);
    let leftIdx = 0, rightIdx = people.length - 1, cnt = 0;
    
    while (leftIdx <= rightIdx) {
        if (sortedPeople[leftIdx] + sortedPeople[rightIdx] <= limit) {
            cnt++;
            leftIdx++;
            rightIdx--;
        }
        else {
            cnt++;
            rightIdx--;
        }
    }
    
    return cnt; 
}