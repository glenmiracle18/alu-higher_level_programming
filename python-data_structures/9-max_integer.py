#!/usr/bin/python3
def max_integer(my_list=[]):
    """Returns maximum integer in list"""
    max_int = my_list[0]  #Assume the fist element is the highest
    if len(my_list) == 0:
        return None
    else:
        for i in my_list:
            if i > max_int:
                max_int = i
        return max_int
