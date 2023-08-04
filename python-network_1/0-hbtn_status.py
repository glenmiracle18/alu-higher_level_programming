#!/usr/bin/python3
"""python that fetches a request from a url"""
import urllib.request

req = urllib.request.Request('https://alu-intranet.hbtn.io/status')
with urllib.request.urlopen(req) as response:
    data = response.read()
    print("Body response:")
    print("\t- type: {}".format(type(data)))
    print("\t- content: {}".format(data))
    print("\t- utf8 content: {}".format(data.decode("utf-8")))
