#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
n_str = str(number)
l_num = n_str[-1]
if number < 0:
    l_num = '-' + str(n_str[-1])
l_int = int(l_num)
# print(f"Last digit of {number} is {l_num}")

if l_int > 5:
    print(f"Last digit of {number} is {l_int} and is greater than 5")
elif l_int == 0:
    print(f"Last digit of {number} is {l_int} and is 0")
elif l_int < 6 and l_int != 0:
    print(f"Last digit of {number} is {l_int} and is less than 6 and not 0")
