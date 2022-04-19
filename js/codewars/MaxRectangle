const maxRectangle = (array) => {

    // array does not include 0.
    if (array.every(el => el.split('').filter(val => +val === 1).length === array.length)) return array.length * array[0].length
    
    // array does not include 1.
    if (
      array.every(
        (el) => el.split("").filter((val) => +val === 0).length === array.length
      )
    )
        return 0;
    
    oneCaseRow = () => {
        const result = (array.map(el => el.match(/(\w)\1+/g)) || []).flat().filter(val => val && !val.includes(0)).map(el => el.length)
        return Math.max(...result)
    }

    // array includes both 1 & 0.
    

    buildMaxCount = (data) => {
        let maxCount = 0;
        console.log(`data ${data}`)
        for (let i = 0; i < data.length - 1; i++) {
            let localMaxCount = 0;
            for (j = 0; j < data.length - 1; j++) {
                // maxCount = Math.max(maxCount, localMaxCount);
                if (data[i][j] == '1') {
                    if (data[i][j + 1] == '1') {
                        localMaxCount = localMaxCount + 2;
                        maxCount = Math.max(maxCount, localMaxCount);
                        console.log(`max count ${maxCount}`);
                    }
                    else {
                        maxCount = Math.max(maxCount, localMaxCount);
                        localMaxCount = 0;
                    }
                } else {
                    maxCount = Math.max(maxCount, localMaxCount);
                    localMaxCount = 0;
                }
                // console.log(`localMaxCount ${localMaxCount}`)
                // if ((data[i][j] == 1 && data[i + 1][j]) == 1) {
                //     console.log(`localMaxCount ${localMaxCount}, maxCount ${maxCount}`)
                //     maxCount = Math.max(maxCount, localMaxCount);
                //     localMaxCount = localMaxCount + 2;
                // } else {
                //     maxCount = Math.max(maxCount, localMaxCount);
                //     localMaxCount = 0;
                // }
                console.log(`max count ${maxCount} localMaxCount ${localMaxCount} `)
            }
        }

        return maxCount
    }

    buildMaxCountFromColumnsArrays = () => {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            let currentSubarray = [];

            for (let j = 0; j < array.length; j++) {
                currentSubarray.push(array[j][i]);
            }
            result.push(currentSubarray);
        }
        console.log(`result ${result} ${buildMaxCount(result)}`)
        return buildMaxCount(result);
    };

    return Math.max(buildMaxCountFromColumnsArrays(), buildMaxCount(array), oneCaseRow());
}

maxRectangle(["101", "111", "001"]);
maxRectangle(["10100", "10111", "11111", "10010"]);
maxRectangle(["1011", "0011", "0111", "1111"]);

/*
    [
        '10100', '10111', '11111', '10010'
    ]
*/
const a = '2'
const b = '2'

a === b