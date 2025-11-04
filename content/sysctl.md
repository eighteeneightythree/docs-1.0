---
tags:
  - cli
created: 2025-10-31
modified: 2025-10-31
---
`sysctl` is a system call and administrator command for configuring kernel parameters. It takes parameters from the following files (in order):
- /proc/sys
- /etc/sysctl.d/_*_.conf
- /run/sysctl.d/*.conf
- /usr/local/lib/sysctl.d/_.conf
- /usr/lib/sysctl.d/_.conf
- /lib/sysctl.d/_.conf
- /etc/sysctl.conf

Calling `sysctl -a` will output all[^1] kernel parameters to stdout
# Further reading:
- https://man7.org/linux/man-pages/man8/sysctl.8.html
- `man sysctl`

[^1]: Except those that are forbidden from being read.
