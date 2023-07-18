#!/us/python3
def only_diff_elements(set_1, set_2):
    new_list = []
    if len(set_1) == 0:
        new_list.extend(set_2)
    elif len(set_2) == 0:
        new_list.extend(set_1)
    else:
        for i in set_1:
            for j in set_2:
                if i not in set_2:
                    new_list.append(i)
                if j not in set_1:
                    new_list.append(j)
    return set(new_list)
