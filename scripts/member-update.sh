mkdir -p docs/assets
mkdir -p docs/js
node modules/import-mailchimp.js
git add *
git add -f docs/*
git commit -am 'Automated member database deployment'
git push