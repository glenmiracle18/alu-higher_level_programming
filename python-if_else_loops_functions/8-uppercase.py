#!/usr/bin/python3
def uppercase(str):
    for i in str:
        if ord(i) in range(97, 122):
            j = chr(ord(i) - 32)
            print("{}".format(j), end='')
        else:
            print("{}".format(i), end='')
    print("\n")
