#!/usr/bin/python3
"""a rectangle class"""


class Rectangle:
    """ a class that describes a rectangle"""

    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height

    @property
    def width(self):
        """return the width"""
        return self.__width

    @width.setter
    def width(self, value):
        """set the new width and update area accordingly."""
        if not isinstance(value, int):
            raise TypeError('width must be an integer')
        elif value < 0:
            raise ValueError("width must be >= 0")
        else:
            self.__width = value

    @property
    def height(self):
        """get the current height"""
        return self.__height

    @height.setter
    def height(self, value):
        """ set the new height and update area accordingly."""
        if not isinstance(value, int):
            raise TypeError('height must be an integer')
        elif value < 0:
            raise ValueError("height must be > 0.")
        else:
            self.__height = value
