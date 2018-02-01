mkdir -p docs
echo 'sandbox.is' > docs/CNAME
NODE_ENV=production webpack -p --progress
git add *
git add -f docs/*
git commit -am 'Automated website edits deployment'
git push