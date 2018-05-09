echo 'Pulling remote changes'
logger "$(date) Sandbox Sync: Pulling changes"
git pull
mkdir -p docs/assets
mkdir -p docs/js
echo 'Generate new members json'
logger "$(date) Sandbox Sync: Generate member json"
node modules/cron.js once
echo 'Copy member json to docs folder'
cp src/assets/members.json docs/assets/members.json
echo 'Add, commit and push the changes'
logger "$(date) Sandbox Sync: Add, commit & push changes"
git add -f docs/assets/members.json
git commit -am 'Automated member database deployment'
git push
echo 'Script complete'