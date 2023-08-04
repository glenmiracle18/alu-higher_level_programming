#!/usr/bin/python3
# python that fetches a request from a url
import urllib.request
with urllib.request.urlopen('https://alu-intranet.hbtn.io/status') as response:
    data = response.read()
    
    print("Body response:")
    print("\t- type: {}".format(type(data)))
    print("\t- content: {}".format(data))
    print("\t- utf8 content: {}".format(data.decode("utf-8")))
