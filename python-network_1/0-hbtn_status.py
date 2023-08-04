#!/usr/bin/python3
""" module url requests"""
import urllib.request


"""making request to provided url"""
if __name__ == "__main__":
    """making request with intranet url"""
    with urllib.request.urlopen('https://intranet.hbtn.io/status') as response:
        html = response.read()
        print('Body response:')
        print("\t- type: {}".format(type(html)))
        print("\t- content: {}".format(html))
        """ string manipulation technique
        """
        temp = str(html)
        print("\t- utf8 content: {}".format(temp[2:-1]))
