#!/usr/bin/python3
# 0-square.py by Ehoneah Obed
"""Defines a square """


class Square:
    """Does nothing"""

    def __init__(self, size=0):
        """Initializing the square class
        Args:
            size - represents the size of the square defined
        Raises:
            if size type not int
            if size < 0
        """

        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size

    def area(self):
        """
        Public Instance method that returns the
        area of a square
        """

        return (self.__size ** 2)
