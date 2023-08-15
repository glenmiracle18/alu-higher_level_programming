#!/usr/bin/python3

"""

A module that does an operation on a matrix

"""


def matrix_divided(matrix, div):
    """

    a function that returns a divided matrix
    
    Args:
        matrix: a matrix of equal length
        div: the number that the matrix will be deivided by

    Raises:
        TyeError: matrix must a list of integers or floats
        TypeError: Each row of the matrix must be of the same size as the original
        TypeError: div must be a number (int or float)
        ZeroDivisionError: div can't be equal to zero

    All elements of the matrix divided by div should be rounded to 2 decimal places.

    Returns:
        a matrix of the same lenght as the original, where each item has been divided by the dix

"""

    if (not isinstance(matrix, list) or matrix == [] or
            not all(isinstance(row, list) for row in matrix) or
            not all((isinstance(ele, int) or isinstance(ele, float))
                    for ele in [num for row in matrix for num in row])):
        raise TypeError("matrix must be a matrix (list of lists) of "
                        "integers/floats")

    for row in matrix:
        if len(row) != len(matrix[0]):
            raise TypeError("Each row of the matrix must have the same size")
    if not isinstance(div, int) and not isinstance(div, float):
        raise TypeError("div must be a number")
    if div == 0:
        raise ZeroDivisionError("division by zero")

    new_matrix = []
    for row in matrix:
        new_row = []
        for i in row:
            res = i/div
            new_row.append(round(res, 2))
        new_matrix.append(new_row)

    return new_matrix



