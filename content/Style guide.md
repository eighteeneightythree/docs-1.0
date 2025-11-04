---
tags:
  - quartz
created: 2025-02-17
modified: 2025-10-22
---
A style guide is a set of guidelines maintained by an editor on the way that material should be formatted for publication.

This collection aims to adhere to a consistent style. Unfortunately, it is composed of working notes so I make no apologies for violating the following style guide.

# On the structure of notes
## Filenames
A unique and descriptive but brief name shall be given to each file. This also serves as the title for a note/page. The title is not included in the frontmatter.
## Frontmatter
Notes in this directory should be provided with metadata for it date of creation (ctime) and its date of last modification (mtime); this if primarily for the purpose of giving the pages available on [docs](https://docs.louisnel.co.nz) a date of publication and also to remind me how out of date the information within might be. Also included in the frontmatter are any requisite tags.
## Titles
All abbreviations should be expanded in the title. The use of hyphens is avoided here in favour of separated or concatenated words. Note that hyphens shall be used in the notes for terminal commands ("--help", the double hypen is here used in line with UNIX syntax)
## Headings
Most pages will have an initial body of text that serves as an outline of the concept described within. All subsequent paragraphs should be children of a relevant heading. This is to maintain consistency and navigability in the table of contents pane.
### The final section will include links...
To other relevant notes, to further reading (usually detailed literature), or to some other thing of interest.
## Footnotes
Typically this will be references or points of clarification that needn't complicate an already lengthy section of text.
# On the formatting of text
Where practical, formats incompatible with standard markdown such as sub- or super-scripts should be avoided for rendering and functionality, much to the author's dismay.
- Exponents included in text shall be represented with E notation where they are part of scientific notation.
- If equations are included they shall be in the LaTeX format.
- Compound adjectives may be hyphenated or concatenated, in the case of the latter a dieresis shall be used. (This style appears to be inconsistent in scientific documentation and the author is still on the fence.)
- The letter ash (Æ), and the letter ethel (Œ), should be avoided, however, all latin origin words containing "ae", and greek origin words containing "oe" should be rended with both letters.
# On the formatting of graphics
Images or flowcharts (generated with mermaid) will be embedded in their corresponding section of text. All embedded graphics shall be in the .png format or .svg format except for true images that require a different format (such as microscopy slides or clinical pictures including radiology or gross pathology).
# The --help notes
Brief reference notes on the use of shell commands include the bash command with angle brackets enclosing placeholder text, optional arguments and flags are enclosed in square brackets.
The best resource for command line help is simply `man <command>`, or somewhere like [ss64](https://ss64.com/).
# On referencing
Where references are given they should be in Vancouver style and included in a footnote.
The "further reading" section of many notes includes other reading material and does not need to be referenced in proper Vancouver style. It should, however, generally follow the format: Author. Title. Publisher; Date. Availability.

---

