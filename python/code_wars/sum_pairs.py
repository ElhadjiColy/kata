def sum_of_pairs(ints, s):
    num_dict = {}
    
    for num in ints:
        if num in num_dict:
            return [ints.index(num_dict[num]), ints.index(num)]
        else:
            num_dict[s - num] = num

sum_of_pairs([2, 4, 6, 8, 12], 10)
