#!/usr/bin/python3
""" module url requests"""
import urllib.request

if __name__ == "__main__":
    with urllib.request.urlopen("https://alu-intranet.hbtn.io/status") as response:
        data = response.read()
        print('Body response:')
        print("\t- type: {}".format(type(data)))
        print("\t- content: {}".format(data))
