/*
    Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

    The data structure is a multi-dimensional Array, i.e:

    [
        [7,8,4,  1,5,9,  3,2,6],
        [5,3,9,  6,7,2,  8,4,1],
        [6,1,2,  4,3,8,  7,5,9],
        
        [9,2,8,  7,1,5,  4,6,3],
        [3,5,7,  8,4,6,  1,9,2],
        [4,6,1,  9,2,3,  5,8,7],
        
        [8,7,6,  3,9,4,  2,1,5],
        [2,4,3,  5,6,1,  9,7,8],
        [1,9,5,  2,8,7,  6,3,4]
    ]


    Rules for validation

    Data structure dimension: NxN where N > 0 and √N == integer
    Rows may only contain integers: 1..N (N included)
    Columns may only contain integers: 1..N (N included)
    'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
*/

const Sudoku = (data) =>
{
  //   Private methods
  // -------------------------
    hasDuplicates = (param) => {
        return Array.isArray(param) && param.every(el => Array.isArray(el) && [...new Set(el.filter(x => Number.isInteger(x)))].length === param.length)
    } // param is an array of dimension NxN

    rowCase = () => {
        return hasDuplicates(data)
    }

    colummnCase = () => {
        return hasDuplicates(buildColumnsArrays())
    }

    subSquareCase = () => {
        return hasDuplicates(buildSquareSubArrays())
    }

    buildSquareSubArrays = () => {
        let localSubarray = []
        let result = []
        let count = 0
        const len = data.length ** 0.5
        let times = 1
        let initialSliceCount = 0

        while (times <= len) {
            for (let i = 0; i < data.length; i++) {
                count++
                const slicedArray = data[i].slice(
                    initialSliceCount,
                    initialSliceCount + len);
                
                localSubarray.push(...slicedArray)

        
                if (count === len) {
                    result.push(localSubarray)
                    localSubarray = []
                    count = 0
                }
        
            }
            times++
            initialSliceCount += len
        }
        
        return result

    }

    buildColumnsArrays = () => {
        let result = []

        for (let i = 0; i < data.length; i++) {
            let currentSubarray = []

            for (let j = 0; j < data.length; j++) {
                currentSubarray.push(data[j][i])
            }
            result.push(currentSubarray)
        }
        return result
    }


  //   Public methods
  // -------------------------
  return {
    isValid: () => {
      // YOUR SOLUTION
        if(!Number.isInteger(data.length ** 0.5)) return false

        return !!rowCase() && !!colummnCase() && !!subSquareCase();
    }
  };
};

Sudoku([
        [7,8,4,  1,5,9,  3,2,6],
        [5,3,9,  6,7,2,  8,4,1],
        [6,1,2,  4,3,8,  7,5,9],
        
        [9,2,8,  7,1,5,  4,6,3],
        [3,5,7,  8,4,6,  1,9,2],
        [4,6,1,  9,2,3,  5,8,7],
        
        [8,7,6,  3,9,4,  2,1,5],
        [2,4,3,  5,6,1,  9,7,8],
        [1,9,5,  2,8,7,  6,3,4]
    ]).isValid()
