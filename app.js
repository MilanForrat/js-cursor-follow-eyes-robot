let eyeBalls = document.getElementsByClassName('eye-ball');


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