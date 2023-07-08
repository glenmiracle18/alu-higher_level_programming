#!/usr/bin/python3
if __name__ == "__main__":
    """Print the number of and list of arguments"""
    import importlib

    module_name = 'variable_load_5'
    module = importlib.import_module(module_name)
    value_of_a = module.a
    print(value_of_a)
