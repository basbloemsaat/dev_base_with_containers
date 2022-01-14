#!/bin/bash

pip install -r /requirements/dev.txt
pip install -r /requirements/base.txt

# run pytest-watch whenever anything changes
while true; do ptw -p ; sleep 2; done

#tail -f /dev/null
