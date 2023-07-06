#!/usr/bin/python3
def print_last_digit(number):
    result = ''
    str_n = str(number)
    last_digit = int(str_n[-1])
    result += str(last_digit)
    print(result, end='')
    return(last_digit)
