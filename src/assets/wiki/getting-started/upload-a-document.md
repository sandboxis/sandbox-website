# Upload a document (ver 1)
This guide is for who has never used json file before.
## Repair a markdown file
Your document will have to be written as markdown format.  You can take a look at [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you've never written a markdown file before.

When you've finished your writing, you can put your file into wiki folder.  The directory is sandbox-website/src/assets/wiki. There will be some folders inside wiki folder, you can choose to put your file into one of them or create a new folder to put it in.   
## Modify doc_list.json

After having placed your file somewhere in wiki folder. You have to modify doc_list.json file. You can find it in wiki folder. 
Suppose the file looks like:
```json
[
	{
		"title": "Getting started",
		"folder": "getting-started",
		"documents": []
	}
]
```
If you want to add a new folder named 'others'.  You hvae to add a new block below or after 'Getting started' block, the doc_list.json now looks like:
```json
[
	{
		"title": "Getting started",
		"folder": "getting-started",
		"documents": []
	},
	{
		"title": "Others",
	       	"folder": "others",
		"documents" : []	
      	}
]
```
The order of titles shows on the table of content depends on the order of blocks. In this case, it will be:
### Getting started
### Others

If you want to add  a new file, for example, this document you are reading right now.
```json
[
	{
		"title": "Getting started",
		"folder": "getting-started",
		"documents": [
			{
				"title": "Upload a document",
				"author": "Vinh-Thuyen Nguyen-Truong",
				"lastmodified": "2020-3-29",
				"filename": "upload-a-document.md"
			}
			]
	},
	{
		"title": "Others",
	       	"folder": "others",
		"documents" : []	
      	}
]
```
if you want to put another file into 'getting-started' folder,  

You can put
```json
{
	"title": "<TITLE>",
	"author": "<YOUR NAME>",
	"lastmodified": "<TIME>",
	"filename": "<YOUR FILE NAME>"
}
```
before or after the block of 'upload-a-document', depend on if you want it to show before of after 'Upload a document' line on the table of contents  THERE'S ALWAYS A COMMA BETWEEN 2 BLOCKS. For example:
```json
[
	{
		"title": "Getting started",
		"folder": "getting-started",
		"documents": [
			{
				"title": "Upload a document",
				"author": "Vinh-Thuyen Nguyen-Truong",
				"lastmodified": "2020-3-29",
				"filename": "upload-a-document.md"
			},
			{
				"title": "<TITLE>",
				"author": "<YOUR NAME>",
				"lastmodified": "<TIME>",
				"filename": "<YOUR FILE NAME>"
			}
			]
	},
	{
		"title": "Others",
	       	"folder": "others",
		"documents" : []	
      	}
]
```
The  table of contents will show:

### Getting started
	Upload a document 
	<TITLE>
### Others

When you have finished everything above you can create a pull request.

