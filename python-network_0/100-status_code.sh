#!/bin/bash
# sends a get reauest and returns just the status code
curl -s -o /dev/null -w "%{http_code}" "$1"
