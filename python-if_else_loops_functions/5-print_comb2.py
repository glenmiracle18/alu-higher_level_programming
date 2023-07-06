#!/usr/bin/python3
for i in range(0, 10):
    for j in range(0, 10):
        if i==9 and j==9:
            print(f"{i}{j}", end='')
        else:
            print(f"{i}{j}, ", end='')
