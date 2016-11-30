#!/bin/sh

# npm run buildstatic
npm run build
scp ./dist/index.html root@182.92.157.231:/root/html/daily/index.html
scp ./dist/static/js/*.js root@182.92.157.231:/root/html/daily/static/js/
scp ./dist/static/css/*.css root@182.92.157.231:/root/html/daily/static/css/
