---
source: "https://jeongwhanchoi.medium.com/install-tmux-on-osx-and-basics-commands-for-beginners-be22520fd95e"
author:
  - "[[Jeongwhan Choi]]"
published: 2018-09-14
created: 2025-02-11
description: "tmux is a Terminal MUltipleXer.. “Install tmux on OSX and Basics Commands for Beginners” is published by Jeongwhan Choi."
tags:
  - "clippings"
---
![](https://miro.medium.com/v2/resize:fit:1216/1*b7q2FCmYYdNsy41_gsybxA.png)

[tmux](https://github.com/tmux/tmux/wiki) is a **T**erminal **MU**ltiple**X**er.

## Install

- Install tmux via HomeBrew of OSX

```
$ brew install tmux
```

- After downloaded, check the version

```
$ tmux -V
```

## Terminology

First of all, you need to know a few terms before you learn how to use them.

- **Prefix**: This is the key combination that must be entered before entering the shortcut key. The default **prefix** for tmux is `ctrl + b`. If the shortcut is `c` then you need to type `<ctrl + b> + c`.
- **Session**: The largest unit managed by tmux. “attach/detach” to the **session**. Even if you detach from the session, the **session** continues to run in the background.
- **Window**: This is the same tab that exists in the **session**. You can have multiple windows in one **session**. You can create and switch **windows** within a session and switch the entire screen as you move tabs.
- **Pane**: This is the screen unit existing in the **window**. You can have multiple **panes** in a **window**. If you divide the entire screen vertically by two, two panes are created.

## Session

## Start Session

```
$ tmux
```

## Start Session with the session name

```
$ tmux new -session_name
$ tmux new-session -session_name
```

## Exit Session

```
$ exit
```

## Attach Session

```
$ tmux attach -t session_name
```

## Detach Session

```
<prefix> + d$ tmux kill-session -t2
```

## Session List

```
$ tmux ls
```

## Change Session Numbering

```
<prefix> + $
```

## Reset tmux

Kill the existing sessions

```
tmux kill-server
```

## Window

All windows-related commands & shortcuts must be executed within the **session**.

## Create Window

```
<prefix> + C
```

## Change Window Name

```
<prefix> + ,
```

## Kill the Current Window

```
<prefix> + &
```

## Managing split panes

## Split Vertically (top/bottom)

```
<prefix> + "
```

## Split Horizontally (left/right)

```
<prefix> + %
```

## Kill the Current Pane

```
<prefix> + x
```

## My Favorite Splited Type

## 1\. Split Vertically

```
<prefix> + "
```

## 2\. Split The Below Window Horizontally

To split the below window, we should move to the below using this command with the arrow key.

```
<prefix> + ↓
```
![](https://miro.medium.com/v2/resize:fit:1400/1*XWmBmv6ExRH5Vh2vGv7Qcg.png)

Then, use the command split horizontal I mentioned above.

```
<prefix> + %
```
![](https://miro.medium.com/v2/resize:fit:1400/1*mxgTUJFR-MQOyzcgWiJdJw.png)

Finally, we got the multi-windows terminal!