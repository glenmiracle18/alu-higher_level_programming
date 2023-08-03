#!/bin/bash
# a script that takes in a url and sends a request to that url
curl -sI "$1" | wc -c
