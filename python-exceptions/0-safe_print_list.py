#!/usr/bin/python3
try:
        new_list = []
        for item in my_list[:x]:
            new_list.append(item)
        var = map(str, new_list)
        result_string = ''.join(var)
        result_int = int(result_string)
        count = 0
        for i in new_list:
            count += 1
        return count
        except TypeError:
        print("There is a value Error")
