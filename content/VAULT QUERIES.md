
```dataview
TABLE WITHOUT ID file.link AS "Incomplete notes"
from #incomplete 
```
<br>

```dataview
TABLE WITHOUT ID file.link AS "Untagged notes"
where length(file.tags)=0
```
<br>

```dataview
TABLE WITHOUT ID 
	Tasks.text AS "Tasks",
	file.link AS "File" FLATTEN file.tasks AS Tasks 
WHERE file.tasks AND !Tasks.completed AND Tasks.text != ""
```
