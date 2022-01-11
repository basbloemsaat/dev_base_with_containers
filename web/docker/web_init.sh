#!/bin/bash

npm install

# tail -f /dev/null
while true; do npm run dev; sleep 2; done
