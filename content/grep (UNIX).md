---
created: 2025-02-11
modified: 2025-10-31
tags:
  - incomplete
  - cli
---
`grep` is used to search for input the matches a given regular expression.

```bash
grep [options] <pattern> [file]
```

I don't know what all the options are and I don't tend to use them anyway...
Where no file is specified, grep reads from standard input ([[stdin]]). In this way it is particularly useful for searching through the output of a command; a command can be run and its output piped to grep.

```bash
ls -R / | grep "found"
# Don't run this, it will take forever...
```