---
tags:
  - cli
created: 2025-10-22
modified: 2025-10-23
---
`sha256` is a shorthand command equivalent to `shasum -a 256` that returns the SHA256 digest of a given input. The information below pertains the command invoked in BSD mode, that is, the command does not end in "sum".

```bash
sha256 [options] <files>
```
# Options
## `-c [checklist ...]`
Provide hash(s) to check against. When sha256 is invoked with the an incorrect checksum with return `SHA256 (file) = digest [ Failed ]`. If the hashes match then it just spits out the calculated hash.

## `[-s string]`
Calculate the hash of a string.

# Alternative verification
There are various other ways to verify a checksum. If you want a positive output you could pipe something into the `shasum` command. 

```bash
echo "hash  file" | shasum -a 256 -c
```
*Note the two spaces in the above string, you need both or it will not work*

This is probably the better way of doing this as it is a command with syntax that is more universally understood.

# Further reading:
- `man sha256`
- `man shasum`
