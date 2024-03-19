var detail=document.getElementById('txt')
var arr=["Webdeveloper","Editor","Posterdesigner"];
var skillindex=0;
function changeskill(){
    detail.innerText=arr[skillindex];
    skillindex+=1;
    if(skillindex==3){
        skillindex=0;
    }
}
setInterval(changeskill,1000);

var namew=document.getElementById('h')
let i=0;
var m=["M","Mu","Mun","Muni","Munin","Munine","Muninen","Muninend","Muninendr","Muninendre","Muninendren"];
function callname(){

    namew.innerText=m[i];
    
    if(i<10){
        i+=1;
        
    }
        
    
}
setInterval(callname,100);