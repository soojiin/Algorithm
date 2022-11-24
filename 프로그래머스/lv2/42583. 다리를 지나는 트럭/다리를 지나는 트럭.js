function solution(bridge_length, weight, truck_weights) {
    
    let queue = new Array(bridge_length).fill(0);
    let cnt = 0, queue_weight = 0;
    
    cnt++;
    queue.shift();
    queue_weight += truck_weights[0];
    queue.push(truck_weights.shift());
    
    while (queue_weight) {
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
