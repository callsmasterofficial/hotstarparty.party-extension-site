
ln -s /etc/nginx/sites-available/hotstarparty.party.conf /etc/nginx/sites-enabled/
systemctl restart nginx


cd /var/www/multiSite/hotstarparty.party/
npm i 
npm run build

pm2 start npm --name "hotstarparty.party--8051" -- start
pm2 startup
pm2 save




pm2 restart all

ln -fs /etc/nginx/sites-available/hotstarparty.party.conf /etc/nginx/sites-enabled/hotstarparty.party.conf