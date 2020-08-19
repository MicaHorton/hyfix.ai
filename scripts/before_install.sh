#!/bin/bash
cd /home/ubuntu/server
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
apt-get -y install nodejs npm
#yum -y install nodejs npm