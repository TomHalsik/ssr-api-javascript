sudo service mysql stop;
sudo nginx -s stop;
docker-compose -f docker-compose.dev.yml up;
