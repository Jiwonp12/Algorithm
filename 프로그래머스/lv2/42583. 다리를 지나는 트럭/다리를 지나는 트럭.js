function solution(bridge_length, weight, truck_weights) {
    let result = 0;
    let que = new Array(bridge_length).fill(0);
    let truckWeight = 0;
    
    while (truck_weights.length > 0 || truckWeight > 0) {
        let end = que.shift();
        truckWeight -= end;
        if (weight >= truckWeight + truck_weights[0] && truck_weights.length > 0) {
            let truck = truck_weights.shift();
            que.push(truck);
            truckWeight += truck;
        } else {
            que.push(0);
        }
        result ++;
    }
    return result;
}