import itertools

def permutation_step(num):
    res, result = ([], [])
    res[:] = str(num)

    [result.append(item) for i in list(itertools.permutations(res)) if (item := int(''.join(list(i)))) > num]

    return min(result) if len(result) else -1