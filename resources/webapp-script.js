var localIP="http://localhost"; //change to machine IP at deployment
var title = "WebApp Template";


function start(){
    loadTitle();
    loadContent("mainMenu");
    loadContent("hamburgerMenu");
}//end start()



function loadTitle(){
    document.getElementsByTagName('title')[0].innerHTML = title;
}//end loadTitle()



function loadContent(section){
    let request = new XMLHttpRequest();
    request.open("GET", localIP+":8080/WebappPackage/webapp?section=" + section, true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            document.getElementById('main').innerHTML += request.responseText;
        }
    };
}//end loadContent()
