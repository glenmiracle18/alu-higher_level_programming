#!/usr/bin/python3
def common_elements(set_1, set_2):
    new_list = []
    for i in set_1:
        for j in set_2:
            if i not in set_2:
                new_list.append(i)
            if j not in set_1:
                new_list.append(j)
    return set(new_list)
