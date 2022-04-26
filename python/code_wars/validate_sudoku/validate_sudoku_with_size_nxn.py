"""
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
"""

class ValidateSudokuWithSizeNxN:
    
    def __init__(self, data):
        self.data = data

    def __del__(self):
        print('destructor called.')

    @staticmethod
    def has_no_duplicates(param):
        return isinstance(param, (list, tuple)) and all(map(lambda x: ((len(set(x)) == len(param)) and all([isinstance(item, int) for item in x])), param))

    # @property
    def __row_case(self):
        print('row case')
        return self.has_no_duplicates(self.data)

    # @property
    def __column_case(self):
        return self.has_no_duplicates(self.__build_columns_arrays())

    # @property
    def __subsquare_case(self):
        return self.has_no_duplicates(self.__build_subsquares_arrays())

    def __build_columns_arrays(self):
        return list(zip(*self.data))
    
    def __build_subsquares_arrays(self):
        local_subarray, result = ([], [])
        count, times, initial_slice_count, length = (0, 1, 0, int(len(self.data) ** 0.5))

        while times <= length:
            for i in range(len(self.data)):
                count += 1
                sliced_array = tuple(self.data[i])[initial_slice_count:initial_slice_count+length]
                local_subarray.extend(sliced_array)

                if count == length:
                    result.append(local_subarray)
                    local_subarray = []
                    count = 0

            times += 1
            initial_slice_count += length

        return result

    def validate(self):
        return False if not isinstance(int(len(self.data) ** 0.5), int) else (self.__row_case() and self.__column_case() and self.__subsquare_case())
