cd backend
composer install --no-interaction

cd ..
cd web
npm install

wget https://github.com/dunglas/mercure/releases/download/v0.15.11/mercure_Linux_x86_64.tar.gz
mkdir /opt/mercure-copied
tar -xf mercure_Linux_x86_64.tar.gz -C /opt/mercure-copied/
rm mercure_Linux_x86_64.tar.gz
cd /opt/mercure-copied
MERCURE_PUBLISHER_JWT_KEY='!ChangeThisMercureHubJWTSecretKey!' MERCURE_SUBSCRIBER_JWT_KEY='!ChangeThisMercureHubJWTSecretKey!' ./mercure run --config Caddyfile.dev
