#!/usr/bin/python3
try:
        new_list = []
        for item in my_list[:x]:
            new_list.append(item)
        var = map(str, new_list)
        result_string = ''.join(var)
        result_int = int(result_string)
        print(result_int)
        return len(new_list)
    except TypeError:
        print("There is a value Error")
