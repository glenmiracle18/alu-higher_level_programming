#!/usr/bin/python3
if __name__ == "__main__":
    """Print the number of and list of arguments"""

    import hidden_4
    for i in dir(hidden_4):
        if i.startswith("__"):
            pass
        else:
            print("{}".format(i))
