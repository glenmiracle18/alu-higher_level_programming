#!/usr/bin/python3
def replace_in_list(my_list, idx, element):
    if idx >= len(my_list):
        return my_list
    elif idx < 0:
        return my_list
    else:
        for i, j in enumerate(my_list):
            if my_list[i] == idx:
                my_list[j] = element
    return my_list
