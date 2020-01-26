echo 'Pulling remote changes'
logger "Sandbox Sync: Pulling changes"
git pull
mkdir -p docs/assets
mkdir -p docs/js
echo 'Generate new members json'
logger "Sandbox Sync: Generate member json"
node modules/cron.js
echo 'Copy member json to docs folder'
# cp src/assets/members.json docs/assets/members.json
# echo 'Add, commit and push the changes'
# logger "Sandbox Sync: Add, commit & push changes"
# git add -f docs/assets/members.json
# git commit -am 'Automated member database deployment'

# # If no token try regular push
# if [[ -z "${gittoken}" ]]; then
# 	git push
# else
# 	git push https://$gituser:$gittoken@github.com/actuallymentor/sandbox-website.git --all
# fi

# echo 'Script complete'
# logger "Sandbox Sync: Complete"