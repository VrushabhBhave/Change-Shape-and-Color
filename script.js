//Change Color Effect
const colbtn = document.querySelector(".col-btn");

colbtn.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let actiondiv = document.querySelector(".action-div");
    actiondiv.style.backgroundColor = `rgb(${red},${green},${blue})`;
})

//Change Shapes Effect
let shapebtn = document.querySelector(".shape-btn");
let shapeArr = ["square","circle","oval","trapezoid","rectangle","parallelogram","triangle-up","diamond","pacman","star","left-point","cross","frame","arrow"];
let arrIndex = 0;

shapebtn.addEventListener("click", () =>{
    let shapeBox = document.querySelector("#shapeBox");
    shapeBox.classList.remove(...shapeArr);
    arrIndex = (arrIndex + 1) % shapeArr.length;
    shapeBox.classList.add(shapeArr[arrIndex]);
})