var localIP="http://localhost"; //change to machine IP at deployment
var title = "WebApp Template";


function start(){
    let section = 0;
    loadTitle();
    loadContent("mainMenu");
    loadContent("hamburgerMenu");
    loadContent("mainContent");
    loadContent("statusBar");
}//end start()



function loadTitle(){
    document.getElementsByTagName('title')[0].innerHTML = title;
}//end loadTitle()



function loadContent(section){
    let request = new XMLHttpRequest();
    request.open("GET", localIP+":8080/WebappPackage/webapp?section=" + section);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            document.getElementById(section).innerHTML += request.responseText;
        }
    };
}//end loadContent()






var sidebarShowing = true;
function hamburger(){
    let wide = window.matchMedia("(max-width: 900px");
    let sidebar = document.getElementById('sidebar');
    let hamburger = document.getElementById('hamburgerMenu');
    let main = document.getElementById('mainContent');
    if(sidebarShowing){
        sidebar.style.display = "none";
        hamburger.style.maxWidth = "5%";
        main.style.minWidth = "90%";        
        sidebarShowing = false;
    }
    else{
        sidebar.style.display = "block";
        hamburger.style.maxWidth = "20%";
        main.style.minWidth = "75%";
        sidebarShowing = true;
    }
}//end hamburger()