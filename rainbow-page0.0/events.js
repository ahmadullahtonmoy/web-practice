console.log("this is separate js file");

// system 2: add on click function
// white function
function makeWhite() {
    document.body.style.backgroundColor="white";
}

// option 3.0: 
// salmon function
const makeSalmonBtn = document.getElementById("make-salmon");
makeSalmonBtn.onclick = makeSalmon;
function makeSalmon() {
    document.body.style.backgroundColor="salmon";
}
// option 3.1:
// black function 
const makeBlackBtn = document.getElementById("black");
makeBlackBtn.onclick = function makeBlack() {
    document.body.style.backgroundColor="black";
}