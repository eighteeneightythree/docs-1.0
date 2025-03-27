---
created: 2025-02-01
modified: 2025-02-06
---

[[Touch bar customization|MTMR]] script tells System Events to set frontApp to app running in foreground

```
tell application System Events 
	set frontApp to name of the first application process whose frontmost is true
end tell
if frontApp is "foo" then 
	return "foo"
else
	return ""
end if
	
```

```
"inline": "tell application \"System Events\"\rset frontApp to name of the first application process whose frontmost is true\rend tell\r\rif frontApp is \"foo\" then\rreturn \"foo\"\relse\rreturn \"\"\rend if"
```

--- 
#inbox 

*Age: `= round((date(now) - this.file.ctime).days)` days*