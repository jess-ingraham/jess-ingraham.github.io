
document.addEventListener('DOMContentLoaded', main);


function main(){

    console.log("loaded");
    
    document.querySelectorAll(".box .info").forEach((box)=>{
        box.addEventListener("click", toggleDropdown);
    });
    
    document.querySelector("#courses").addEventListener("click", ()=>openMenuDrop("#courses"));
    
    document.querySelector("#personal").addEventListener("click", ()=>openMenuDrop("#personal"))

}

function openMenuDrop(id){
    //check if the clicked one is already open and close it again
    
    if (!document.querySelector(id+"-drop").classList.contains("hidden")){
        document.querySelector(id+"-drop").classList.add("hidden");
        
    }
    
    else{
        //check if the other one is open and close it

        document.querySelectorAll(".nav-dropdown").forEach((drop)=>{
            if (!drop.classList.contains("hidden")){
                drop.classList.add("hidden");
                changeArrow(document.querySelector("#"+drop.id.split("-")[0]));
            }
        });

        //then open the appropriate dropdown

        document.querySelector(id+"-drop").classList.remove("hidden");
        
    }
    
    changeArrow(document.querySelector(id));
    
    
    
}

function toggleDropdown(evt){
    
    const box = getMainBox(evt.target);

    box.classList.toggle("open");
    
    const desc = box.querySelector("div.description");
    desc.classList.toggle("hidden");
    
    box.querySelector('i.fa-angle-left').classList.toggle("rotated");
    
    //changeArrow(box);
}

function changeArrow(box){
    
    const arrow = box.querySelector("i.fas");
    
    if(arrow.classList.contains("fa-angle-left")){
        arrow.classList.remove("fa-angle-left");
        arrow.classList.add("fa-angle-down");
    }
    
    else if (arrow.classList.contains("fa-angle-down")){
        arrow.classList.add("fa-angle-left");
        arrow.classList.remove("fa-angle-down");
    }
    
}

function getMainBox(target){
    let mainBox;
    if (target.parentElement.classList.contains("info-desc")){
        mainBox = target.parentElement.parentElement.parentElement; //the box objec that is the parent of what was clicked
    }
    else if(target.parentElement.classList.contains("info")){
        mainBox = target.parentElement.parentElement;
    }
    
    return mainBox;
}