#!/usr/bin/python3
def divisible_by_2(my_list=[]):
    """Return a new list with True or False
    depending on whether the integer at the same position
    in the original list is a multiple of 2"""
    new_list = []
    for i in my_list:
        if i % 2 == 0:
            new_list.append(True)
        else:
            new_list.append(False)
    return new_list
