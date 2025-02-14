`screen` is a bash command that allows the user to multiplex the terminal between several processes. When a screen is detached, any processes inside it continue to run.

```bash
screen [options] [command]
```

# `screen -S <session-name>`
Opens and enters a new session with the specified name

# `screen -ls`
Lists all currently running screens with the [[PID]] and status.

# `screen -r <pid>`
Reattaches to the specified screen. If only one screen is running the pid needn't be specified.

# `screen -d`
Detaches from the current screen.


# Links:
- [[Job control (UNIX, bash)]]
- [[tmux]] is an alternative program

---
#command-line
