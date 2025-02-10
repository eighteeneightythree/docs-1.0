> [!note] This workflow is not yet implemented.

The ZK Vault is duplicated to `~/The Cellar/quartz/content` by an Automator workflow every time a new file is added.

To sync with the GitHub repo run the following command:
```bash
npx quartz sync
```

This should push all changes from the local machine and it will initiate a rebuild on Cloudflare.

> [!warning] There is a 500/month limit on Cloudflare, pushing to GitHub should only be a semi-regular process.


# Links:

---
#quartz 