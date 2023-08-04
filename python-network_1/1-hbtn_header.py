#!/usr/bin/python3
""" module url requests"""
import urllib.request
import sys

"""making request to provided url"""
if __name__ == "__main__":
    """"make a re quest to get the X-Request-Id"""
    url = sys.argv[1]
    with urllib.request.urlopen(url) as response:
        print(dict(response.headers).get("X-Request-Id"))
