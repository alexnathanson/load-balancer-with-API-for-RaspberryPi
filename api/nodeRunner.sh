#!/bin/bash
# navigate to home directory, then to this directory, then execute python script, then back home

cd /
cd home/pi/load-balancer-with-API-for-RaspberryPi/api
nodejs index.js
cd /
