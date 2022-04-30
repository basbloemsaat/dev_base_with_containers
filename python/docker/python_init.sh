#!/bin/bash

pip install -r /requirements/dev.txt

# run pytest-watch whenever anything changes
while true; do ptw -p ; sleep 2; done

#tail -f /dev/null
