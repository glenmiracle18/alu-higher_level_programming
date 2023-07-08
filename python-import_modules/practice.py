#!/usr/bin/python3
import sys
system_argument = sys.argv
num_arguments = len(sys.argv) - 1
if num_arguments == 0:
    print("{} arguments".format(num_arguments))
elif num_arguments == 1:
    print("{} arguments:".format(num_arguments))
    print("a: {}".format(system_argument))
else:
    for i, value in enumerate(range(num_arguments)):
        print("{} arguments".format(i)) 
        print("{}: {}".format(i, value))
