#!/usr/bin/python3

from models.base import Base
"""
A rectangle class that inherits from base
"""

class Rectangle(Base):
    """inheritance """

    def __init__(self, width, height, x=0, y=0, id=None):
        """ initialization """
        self.width = width
        self.height = height
        self.x = x
        self.y = y
        super().__init__(id)
    
    # getter functions
    @property
    def width(self):
        """Get width value"""
        return self.__width
    
    @property
    def height(self):
        """Gets the height"""
        return self.__height

    @property
    def x(self):
        """Gets x"""
        return self.__x

    @property
    def y(self):
        """Gets y"""
        return self.__y
