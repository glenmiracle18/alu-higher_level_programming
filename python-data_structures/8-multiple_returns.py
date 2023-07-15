#!/usr/bin/python3
def max_integer(my_list=[]):
    """Returns maximum integer in list"""
    if not my_list:
        return None
    # the actual function below
    max_int = my_list[0] 
    for i in my_list:
        if i > max_int:
            max_int = i
    return max_int
