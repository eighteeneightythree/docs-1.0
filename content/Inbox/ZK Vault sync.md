Vault path with spaces escaped
```bash
/Users/louisnel/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/ZK\ Vault
```

rsync command dry run
```bash
rsync -nru --exclude .obsidian -i -h /Users/louisnel/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/ZK\ Vault/ ~/The\ Cellar/quartz\ backup\ test
```
 
 rsync command
 ```bash
rsync -ru --exclude .obsidian -i -h /Users/louisnel/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/ZK\ Vault/ ~/The\ Cellar/quartz\ backup\ test
```

rsync-sidekick command
```bash
~/go/bin/rsync-sidekick --verbose /Users/louisnel/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/ZK\ Vault/ ~/The\ Cellar/quartz\ backup\ test/
```

borg backup command
```bash
borg create ~/The\ Cellar/quartz-borg::init /Users/louisnel/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/ZK\ Vault --exclude .obsidian
```


  git branch -m deployment-testing deployment
  git fetch origin
  git branch -u origin/deployment deployment
  git remote set-head origin -a

replace content with symlink
```bash
rm -r content && ln -s /Users/louisnel/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/ZK\ Vault content
```

test2