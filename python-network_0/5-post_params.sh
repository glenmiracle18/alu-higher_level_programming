#!/bin/bash
# sends a post request with an email and a subject
curl -sX POST -d "email=test@gmail.com&subject=I will always be here for PLD" "$1"
