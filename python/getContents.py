#!/bin/python3

print("Content-Type: text/html\n")


	### change one line in the javascript function and make sure this file has execute permissions

# function loadContent(section){
#     let request = new XMLHttpRequest();
#     request.open("GET", localIP+"/python/getContents.py?section=" + section);
#     request.send();
#     request.onreadystatechange = function(){
#         if(request.readyState === 4 && request.status === 200){
#             document.getElementById(section).innerHTML += request.responseText;
#         }
#     };
# }//end loadContent()

import cgi

getRequest = cgi.FieldStorage()

filepath = "../webapp/htmlSections/" + getRequest['section'].value + ".html"

contents = ""
with open(filepath, "r") as fromFile:
	for line in fromFile:
		contents+= line

print(contents)