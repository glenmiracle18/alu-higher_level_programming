#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    res = []
    for row in matrix:
        squared = []
        for i in row:
            sqr = i ** 2
            squared.append(sqr)
        res.append(squared)
    return res
