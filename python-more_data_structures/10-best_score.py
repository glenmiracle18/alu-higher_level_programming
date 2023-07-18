#!/usr/bin/python3
def best_score(a_dictionary):
        if not a_dictionary:
              return None
        else:
            values = []
            for k, v in a_dictionary.items():
                values.append(v)
            max_val = max(values)
            name=''
            for n, s in a_dictionary.items():
                    if s == max_val:
                        name += str(n)
            return name
