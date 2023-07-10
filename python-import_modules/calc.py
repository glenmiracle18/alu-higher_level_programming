#!/usr/bin/python3
import sys
from calculator_1 import add, sub, mul, div
if __name__ == "__main__":
    # print(add(20, 3)) # Output:  23

    if len(sys.argv) - 1 != 3:
        print("Usage: ./100-my_calculator.py <a> <operator> <b>")
        exit_value = 1
        sys.exit(exit_value)
    else:
        arg1 = sys.argv[1]
        operator = sys.argv[2]
        arg0 = sys.argv[0]
        arg3 = sys.argv[3]

        ops = ['+', '*', '/', '-']
        if operator not in ops:
            print("Unknown operator. Available operators: +, -, * and /")
            exit_value = 1
            sys.exit(exit_value)

        if operator == '+':
            sum  = add(int(arg1), int(arg3))
            print("{} {} {} = {}".format(arg1, operator, arg3, sum))
        elif operator == '*':
            product  = mul(int(arg1), int(arg3))
            print("{} {} {} = {}".format(arg1, operator, arg3, product))

        elif operator == '-':
            difference  = sub(int(arg1), int(arg3))
            print("{} {} {} = {}".format(arg1, operator, arg3, difference))

        elif operator == '/':
            division  = div(int(arg1), int(arg3))
            print("{} {} {} = {}".format(arg1, operator, arg3, division))
