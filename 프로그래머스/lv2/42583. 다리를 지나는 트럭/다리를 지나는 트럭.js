function solution(bridge_length, weight, truck_weights) {
    
    // let cur = truck_weights.shift();
    let queue = new Array(bridge_length).fill(0);
    let cnt = 0, queue_weight = 0;
    
    cnt++;
    queue.shift();
    queue_weight += truck_weights[0];
    queue.push(truck_weights.shift());
    
    // let queue = [cur], cnt = 1, queue_weight = cur; // [7]
    
    while (queue_weight) {
//         if (queue.length === bridge_length) {
//             let passed = queue.shift(); //4
//             queue_weight -= passed; //5
//         }
        
//         cur = truck_weights[0]; //6 10
        
//         if (queue_weight + cur <= weight) {
//             queue_weight += cur;
//             truck_weights.shift(); // []
//             queue.push(cur); //[10]
//         }
//         else {
//             let passed = queue.shift(); // 5
//             queue_weight -= passed; //0
//         }
        
//         cnt++;
        cnt++;
        
        queue_weight -= queue.shift();
        
        if (truck_weights.length && queue_weight + truck_weights[0] <= weight) {
            queue_weight += truck_weights[0];
            queue.push(truck_weights.shift());
        }
        else {
            queue.push(0);
        }
    }
    
    return cnt;
}