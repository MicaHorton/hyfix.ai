#!/bin/bash
cd /home/ubuntu/server/src
npm start
pm2 start npm --name "hyfix-website" -- start
pm2 startup
pm2 save
pm2 restart all