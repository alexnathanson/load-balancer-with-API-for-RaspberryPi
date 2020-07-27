# load-balancer-with-API-for-RaspberryPi
A load balancer with an API for updating dynamic IPs for Raspberry Pi using NGINX and NodeJS

Installing NGINX on a Raspberry Pi
* https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md


## NGINX instruction
https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/

## NODE JS
Based off of this tutorial: https://dev.to/guimg/how-to-serve-nodejs-applications-with-nginx-on-a-raspberry-jld


To close port 3000 (the one that NodeJS is using to the public) configure the IP table by entering this in the terminal:
* iptables -A INPUT -p tcp -s localhost --dport 3000 -j ACCEPT
* iptables -A INPUT -p tcp --dport 3000 -j DROP
