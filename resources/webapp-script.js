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










///////////////////////////////////////  HAMBURGER MENU  //////////////////////////////
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










    //////////////////////////////////  TAB PANE  ///////////////////////////////////////
function tabPane(event, tab){
    let content = document.getElementsByClassName('tabPanel');
    for(let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}//end tabPane()









    ////////////////////////////////////  LIST BOX  /////////////////////////////////////
function addItem(item){
    document.getElementById('listBox').innerHTML = "<li onclick=\"listSelect(event)\">" + item + "</li>";
}//end addItem()



function listSelect(event){
    if(event.button == 0 && event.target.style.backgroundColor != "rgba(112, 152, 245, 0.3)"){
        //left click
        event.target.style.backgroundColor = "rgba(112, 152, 245, 0.3)";
    }
    else{
        event.target.style.backgroundColor = "#ffffff";
    }
//    else if(event.button == 2){
//        //right click, need to override browser's right-click to use this
//    }
}//end listSelect()




///////////////////////////////////  COMBO BOX  /////////////////////////////////
var optionsShowing = false;
function comboBoxSelect(event, options){
    if(optionsShowing){
        document.getElementsByClassName('comboBoxOptions')[0].style.display = "none";
        optionsShowing = false;
    }
    else{
        document.getElementsByClassName('comboBoxOptions')[0].style.display = "block";
        optionsShowing = true;
    }
    let choices = document.getElementsByName(options);
    for(let i=0; i < choices.length; i++){
        if(choices[i].checked){
            console.log(choices[i].checked);
            console.log(choices[i].value)
            document.getElementsByClassName('comboBoxLabel')[0].innerHTML = choices[i].value + " &#9660;";
        }
    }
}//end comboBoxSelect()