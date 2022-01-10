#!/bin/bash

pip install -r /requirements/dev.txt
pip install -r /requirements/base.txt

tail -f /dev/null
