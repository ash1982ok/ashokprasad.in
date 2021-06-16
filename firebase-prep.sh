npm install -g firebase-tools

rm -rf public/assets/* -y
rm -rf public/*
mkdir public/assets
cp dist/apps/ash/* public/
cp dist/apps/ash/assets/* public/assets/
