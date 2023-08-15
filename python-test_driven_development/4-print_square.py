#!/usr/bin/python3
"""

a module that prints a # in form of a squre

"""


def print_square(size):
    """
    a function that prints a square

    Args:
        size: the size of the square

    Raises:
        TypeError: size must be integer
        ValueError: size must be > 0
        TypeError: size must not be float

    Returns:
        returns # that forms a square of size, size
    """

    if not isinstance(size, int):
        raise TypeError("size must be an integer")
    if size < 0:
        raise ValueError("size must be >= 0")
    if isinstance(size, float) and size < 0:
        raise TypeError("size must be a float")

    for x in range(0, size):
        for y in range(size):
            print("#", end="")
        print("")
