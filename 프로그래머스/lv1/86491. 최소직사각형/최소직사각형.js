function solution(sizes) {
    
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    let wMax = 0, hMax = 0;
    for (let i = 0 ; i < rotated.length ; i++) {
        if (wMax < rotated[i][0]) wMax = rotated[i][0];
        if (hMax < rotated[i][1]) hMax = rotated[i][1];
    }
    return wMax * hMax;
}