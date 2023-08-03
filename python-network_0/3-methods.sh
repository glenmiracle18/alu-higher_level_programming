#!/bin/bash
# displays all http methods the server will accept
curl -sI "$1" | awk '/^Allow:/ {print substr($0, 8)}'
