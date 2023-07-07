#!/usr/bin/python3
def remove_char_at(str, n):
    str_copy = str[:]
    new_str = ""
    for i in range(len(str_copy)):
        if i != n:
            new_str += str_copy[i]
    return new_str
