#!/bin/bash
# a script that takes in a url and sends a request to that url
# and displays the size of the response

curl -sI "$1" | wc -c
