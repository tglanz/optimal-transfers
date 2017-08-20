const getMinMax = arr => {

    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    let maxIdx = -1;
    let minIdx = -1;

    arr.forEach((value, index) => {

        if (value > max){
            max = value;
            maxIdx = index;
        }

        if (value < min){
            min = value;
            minIdx = index;
        }
    })

    return {
        min, max, minIdx, maxIdx,
        distance: Math.abs(max - min)
    };
}

const balance = (threshold, arr) => {
    const toBalance = Object.assign([], arr);
    console.log(toBalance);
    let mm = getMinMax(toBalance);

    while (mm.distance > threshold){
        toBalance[mm.maxIdx] -= mm.distance / 2;
        toBalance[mm.minIdx] += mm.distance / 2;
        mm = getMinMax(toBalance);
        console.log(toBalance);
    }

    return toBalance;
}

// test
const numbers = [4, 10, 15, 25, 3];
const threshold = 1;
const output = balance(threshold, numbers);
console.log(output);

