#!/usr/bin/python3
def uppercase(str):
    output = ""
    for i in str:
        if ord(i) in range(97, 123):
            j = chr(ord(i) - 32)
            output += "{}".format(j)
        else:
            output += "{}".format(i)
    print(output, end='')
    print()
