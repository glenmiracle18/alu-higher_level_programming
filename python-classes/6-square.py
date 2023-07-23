#!/usr/bin/python3
# 0-square.py by Ehoneah Obed
"""Defines a square """


class Square:
    """Does nothing"""

    def __init__(self, size=0, position=(0, 0)):
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
            self.__position = position

    @property
    def size(self):
        """Retrives size of square"""
        return self.__size

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = value

    def area(self):
        """
        Public Instance method that returns the
        area of a square
        """

        return (self.__size ** 2)

    def my_print(self):
        """
        Public Instance that prints the square
        with the character to stdout
        """
        if self.__size == 0:
            print()

        for i in range(1, self.__size+1):
            print("_" * self.__position[0] + "#" * self.__size)

    @property
    def position(self):
        """ A private instance attribute position"""
        return self.__position

    @position.setter
    def position(self, value):
        if not isinstance(value, int) and len(value) == 2:
            raise TypeError("position must be a tuple of 2 positive integers")
        elif value < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__position = value
