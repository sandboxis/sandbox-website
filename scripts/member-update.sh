node modules/import-mailchimp.js
NODE_ENV=production webpack -p --progress
git add *
git commit -am 'Automated member database deployment'
git push