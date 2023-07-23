#!/usr/bin/python3
# 0-square.py by Ehoneah Obed
"""Defines a square """


class Square:
    """Does nothing"""

    def __init__(self, size=0):
        """Initializing the square class
        Args:
            size - represenets the size of the square defined
        Raises:
            TypeError: if size is not integer
            ValueError: if size is less than zero
        """

        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size
