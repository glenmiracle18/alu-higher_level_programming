#!/usr/bin/python3
def element_at(my_list, idx):
    if idx > len(my_list):
        return None
    elif idx < 0:
        return None
    else:
        ans = my_list[idx]
        return ans
