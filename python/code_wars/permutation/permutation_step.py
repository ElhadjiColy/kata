def swap(a, b, array):
    array[b], array[a] = (array[b], array[a])[::-1]

    return int(''.join(array))


def permutation_step(num):
    res = []
    res[:] = str(num)
    combined = []

    for i in range(len(res)):
        local_subarray = res
        [combined.append(item) for j in range(len(res) - 1) if (item := swap(j+1, j, local_subarray)) > num]

    return min(combined)