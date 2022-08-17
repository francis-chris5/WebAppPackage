<?php

	// NEED TO CHANGE 1 LINE IN JAVASCRIPT:

	// function loadContent(section){
	//     let request = new XMLHttpRequest();
	//     request.open("GET", localIP+"/php/webapp/php/getContents.php?section=" + section);
	//     request.send();
	//     request.onreadystatechange = function(){
	//         if(request.readyState === 4 && request.status === 200){
	//             document.getElementById(section).innerHTML += request.responseText;
	//         }
	//     };
	// }//end loadContent()


	$filepath = "http://localhost/php/webapp/htmlSections/".$_GET['section'].".html";

	$fromFile = fopen($filepath, "r");
	while(!feof($fromFile)){
		echo(fgets($fromFile));
	}
	fclose($fromFile);

	echo($contents);
?>