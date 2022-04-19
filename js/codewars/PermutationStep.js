function PermutationStep(num) {
    const numToArray = num.toString().split("");

    let combined = []

    for (let i = 0; i < numToArray.length; i++) {
        const localSubarray = Array.from(numToArray);
        for (let j = i; j < numToArray.length - 1; j++) {
            const tmp = localSubarray[j]
            localSubarray[j + 1] = tmp
            localSubarray[j] = numToArray[j+1]
            combined.push(localSubarray.join(''))
        }
    }

    return combined.sort().find(el => el > num) || -1
}

PermutationStep(123);

