#!/usr/bin/python3

"""

a module prints the user's name

"""

def say_my_name(first_name, last_name=""):
    """
    prints My name is <first_lanem> <last_name>

    Args:
        first name: fist_name
        last name: last_name

    Raises:
        TypeError: both names should be a string

    Not allowed to import modules

    Returns:
        print My name is <first name> <last name>
    """

    if not isinstance(first_name, str):
        raise TypeError("first_name must be a string")
    if not isinstance(last_name, str):
        raise TypeError("last_name must be a string")

    print("My name is {} {}".format(first_name, last_name))
