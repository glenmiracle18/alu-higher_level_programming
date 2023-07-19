#!/usr/bin/python3
def weight_average(my_list=[]):
    if not my_list:
        return 0
    new_list = []
    weight = []
    for tuple in my_list:
        mul = tuple[0] * tuple[1]
        new_list.append(mul)
        weight.append(tuple[1])
    av1 = sum(weight)
    averg = sum(new_list)/sum(weight)
    return averg
