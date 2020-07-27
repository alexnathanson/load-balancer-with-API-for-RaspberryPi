# load-balancer-with-API-for-RaspberryPi
A load balancer with an API for updating dynamic IPs for Raspberry Pi using NGINX and NodeJS

## NGINX
* NGINX install instructions: https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md
* NGINX load balancer documentation: https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/

Config Instructions:
* update the 'http' file with appropriate end points as necessary
* place the 'http' file in conf.d
* add 'include conf.d/http;' to the nginx.conf file
* comment out the entire default http block in the nginx.conf file

## NODE JS
Based off of this tutorial: https://dev.to/guimg/how-to-serve-nodejs-applications-with-nginx-on-a-raspberry-jld

* Navigate to the api directory and install express
	* npm init -y
	* npm install express --save
	 
* To close port 3000 (the one that NodeJS is using to the public) configure the IP table by entering this in the terminal:
	* iptables -A INPUT -p tcp -s localhost --dport 3000 -j ACCEPT
	* iptables -A INPUT -p tcp --dport 3000 -j DROP
