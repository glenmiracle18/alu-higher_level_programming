#!/usr/bin/python3
def uppercase(str):
    for i in str:
        if ord(i) in range(97, 122):
            i = chr(ord(i) - 32)
        print("{}".format(i), end='')
