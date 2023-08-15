#!/usr/bin/python3

"""

a module that adds two integers

"""


def add_integer(a, b=98):
    """
    a function that returns the sum of two numbers / floats

    Args:
        a: fist number
        b: second number

    Returns:
        sum of the two digits

    Raises:
        TypeError: if a or b is not an integer
    """

    if not isinstance(a, int) and not isinstance(a, float):
        raise TypeError("a must be an integer")
    if not isinstance(b, int) and not isinstance(b, float):
        raise TypeError("b must be an integer")
    sum = int(a) + int(b)
    return sum
