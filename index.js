let count = 0;

let saveEL = document.getElementById("save-el");
let countEL = document.getElementById("count-el");

function increment(){
    count +=1;
    countEL.textContent = count;
    console.log(count);
}

function save(){
    let countStr = " "+count + " - ";
    saveEL.textContent += countStr;
    countEL.textContent = 0;
    count = 0;
}