let eyeBalls = document.getElementsByClassName('eye-ball');
let leftButton = document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let leftArm = document.querySelector('#left-arm');
let rightArm = document.querySelector('#right-arm');
let topButton = document.querySelector('#top-button');
let progressOne = document.querySelector('#progress-1');


leftButton.style.transition = "all 0.3s";
leftArm.style.transition = "all 0.7s";
rightButton.style.transition = "all 0.3s";
rightArm.style.transition = "all 0.7s";
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
}, 500);
setInterval(function(){
    leftButton.style.boxShadow ="1px 1px 2px rgb(255, 180, 0)";
    leftArm.style.filter = "brightness(1)";
    topButton.style.filter = "brightness(1)";
}, 1500);
setInterval(function(){
    rightButton.style.boxShadow ="1px 1px 10px rgb(255, 0, 0)";
    rightArm.style.filter = "brightness(1.2)";
}, 300);
setInterval(function(){
    rightButton.style.boxShadow ="1px 1px 2px rgb(255, 180, 0)";
    rightArm.style.filter = "brightness(1)";
}, 1800);

// pop over from bootstrap
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

// let reload = true;
// function progress(reload){
//     if(reload == true){
//         for(let i=0; i <= 100; i++){
//             setInterval(function(){
//                 progressOne.style.width = i+"px";    
//             },100); 
//             if(i == 100) {
//             reload = false;
//             }
//         }
//     }
//     else{
//         for(let j=100; j >= 0; j--){
//             setInterval(function(){
//                 progressOne.style.width = j+"px";
//             },100); 
//             if(j == 0) {
//             reload = true;
//             }
//         }
//     }
// }

// progress();
         
            
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
   
