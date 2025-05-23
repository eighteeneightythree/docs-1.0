---
created: 2025-02-08
modified: 2025-02-15
---
`~/The Cellar/quartz/content` is symlinked to The ZK Vault .

To sync with the GitHub repo run the following command:
```bash
npx quartz sync
```

This should push all changes from the local machine and it will initiate a rebuild on Cloudflare.

> [!warning] There is a 500/month limit on Cloudflare, pushing to GitHub should only be a semi-regular process.


# Links:

---
#quartz 