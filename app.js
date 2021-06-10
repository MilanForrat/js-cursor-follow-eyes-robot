let eyeBalls = document.getElementsByClassName('eye-ball');
let leftButton = document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let leftArm = document.querySelector('#left-arm');
let rightArm = document.querySelector('#right-arm');
let topButton = document.querySelector('#top-button');
let progressOne = document.querySelector('#progress-1');
let moveable = document.querySelectorAll('.moveable');
let toolBox = document.querySelector('#box');
let offCanvasBox = document.querySelector('.offcanvas-body');
let offCanvasProgress = document.querySelector('#progress-2');

let pince = document.getElementById('pince');
let marteau = document.getElementById('marteau');
let tournevis = document.getElementById('tournevis');
let metre = document.getElementById('metre');
let cle = document.getElementById('cle');
let cuter = document.getElementById('cuter');

leftButton.style.transition = "all 0.3s";
leftArm.style.transition = "all 0.7s";
rightButton.style.transition = "all 0.3s";
rightArm.style.transition = "all 0.7s";
marteau.style.transition ="all 0.2s";
cle.style.transition ="all 0.2s";
pince.style.transition ="all 0.2s";
metre.style.transition ="all 0.2s";
tournevis.style.transition ="all 0.2s";
cuter.style.transition ="all 0.2s";
topButton.style.transition ="all 0.7s";
// progressOne.style.transition = "all 10s";

document.onmousemove = function (){
    // clientX = la possition du curseur du clien sur x
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";

    // on cherche à associer la position du curseur avec celle des yeux, on boucle par 2 car on a deux éléments à itérer : eye balls
    for(let i = 0; i <2;i++){
        eyeBalls[i].style.left = x;
        eyeBalls[i].style.top = y;
        // on translate en sens inverse pour éviter que les yeux sortent du cadre ou descendent trop bas par exemple
        eyeBalls[i].style.transform = "translate(-"+x+",-"+y+")";
    }
}
setInterval(function(){
    leftButton.style.boxShadow ="1px 1px 10px rgb(255, 0, 0)";
    leftArm.style.filter = "brightness(1.2)";
    topButton.style.filter = "brightness(1.2)";
    pince.style.filter = "brightness(1.2)";
    marteau.style.filter = "brightness(1.2)";
    cle.style.filter = "brightness(1.2)";
}, 500);
setInterval(function(){
    leftButton.style.boxShadow ="1px 1px 2px rgb(255, 180, 0)";
    leftArm.style.filter = "brightness(1)";
    topButton.style.filter = "brightness(1)";
    pince.style.filter = "brightness(1)";
    marteau.style.filter = "brightness(1)";
    cle.style.filter = "brightness(1)";
}, 1500);
setInterval(function(){
    rightButton.style.boxShadow ="1px 1px 10px rgb(255, 0, 0)";
    rightArm.style.filter = "brightness(1.2)";
    tournevis.style.filter = "brightness(1.2)";
    metre.style.filter = "brightness(1.2)";
    cuter.style.filter = "brightness(1.2)";
}, 300);
setInterval(function(){
    rightButton.style.boxShadow ="1px 1px 2px rgb(255, 180, 0)";
    rightArm.style.filter = "brightness(1)";
    tournevis.style.filter = "brightness(1)";
    metre.style.filter = "brightness(1)";
    cuter.style.filter = "brightness(1)";
}, 1800);

// pop over from bootstrap
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});
             
let progressBar = 0;
function progressBarUp(){
    // console.log(progressBar);
    progressOne.style.width = progressBar+"px"; 
    setTimeout(function(){
        progressBar++;
        if(progressBar < 95) {

            progressBarUp();
        }
        else {
            progressBarDown();
        }
    },200); 
}
function progressBarDown() {
    // console.log(progressBar);
    progressOne.style.width = progressBar+"px"; 
    setTimeout(function(){
        progressBar--;
        if(progressBar > 0) {

            progressBarDown();
        }
        else {
            progressBarUp();
        }
    },200); 
}
progressBarUp();

toolBox.addEventListener('dragover', dragOver);
toolBox.addEventListener('dragenter', dragEnter)

let item = null;
document.addEventListener('dragstart', function(e){
    //set the item reference to this element
    console.log("start");
    item = e.target;

    // console.log(item)
    //we don't need the transfer data, but we have to define something
    //otherwise the drop action won't work at all in firefox
    //most browsers support the proper mime-type syntax, eg. "text/plain"
    //but we have to use this incorrect syntax for the benefit of IE10+
    e.dataTransfer.setData('text', '');

}, false);
let pourcent = 0;
let progressWidth = 16.7;
//drop event to allow the element to be dropped into valid targets
document.addEventListener('drop', function(e){
    //if this element is a drop target, move the item here 
    //then prevent default to allow the action (same as dragover)
    // console.log(e.target);
    e.target.appendChild(item);
    e.preventDefault();
    let newElement = document.createElement('img');
    newElement = item;
    newElement.style.position ="inherit";
    pourcent++ 
    offCanvasProgress.style.width = progressWidth*pourcent+"%";
    offCanvasProgress.textContent = pourcent+"/6";
    // console.log(newElement);
    offCanvasBox.appendChild(newElement);
    if(pourcent === 6){
        offCanvasBox.innerHTML += "2ème chiffre du code secret : 5";
    }
}, false);

function dragOver(e){
    // on preventDefault car dragOver à un évènement de base qu'on ne souhaite pas
    e.preventDefault();
    console.log("over");
}
function dragEnter(e){
    // on preventDefault car dragOver à un évènement de base qu'on ne souhaite pas
    e.preventDefault();
    console.log("enter");
    this.className += " hovered";
}