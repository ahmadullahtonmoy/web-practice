/* 
console.log("this is separate js file");

system 2: add on click function [IMPORTANT]
white function
function makeWhite() {
    document.body.style.backgroundColor="white";
}

option 3.0: 
salmon function
const makeSalmonBtn = document.getElementById("make-salmon");
makeSalmonBtn.onclick = makeSalmon;
function makeSalmon() {
    document.body.style.backgroundColor="salmon";
}
option 3.1: [use this sometime]
black function 
const makeBlackBtn = document.getElementById("black");
makeBlackBtn.onclick = function makeBlack() {
    document.body.style.backgroundColor="black";
}


*/

// option 4.0 (with event listener)
// light blue function
const lightBlue = document.getElementById('light-blue');
lightBlue.addEventListener('mouseover' , makeLightBlue);

function makeLightBlue() {
    document.body.style.backgroundColor = 'lightblue';
}

// option 4.1
// light gray function
const lightGray = document.getElementById('light-gray');
lightGray.addEventListener('mouseover' , function(){
    document.body.style.backgroundColor = 'lightgray';
});

// option 4.2 : [IMPORTANT SOMETIME]
// light salmon function
document.getElementById('light-salmon').addEventListener('mouseover' , function(){document.body.style.backgroundColor = 'lightsalmon'});

// light green function
document.getElementById('light-green').addEventListener('mouseover' , function(){document.body.style.backgroundColor = 'lightgreen'});

// light sky blue function
document.getElementById('light-sky-blue').addEventListener('mouseover' , function(){document.body.style.backgroundColor = 'lightskyblue'});

// light coral function
document.getElementById('light-coral').addEventListener('mouseover' , function(){document.body.style.backgroundColor = 'lightcoral'});

// white function
document.getElementById('white').addEventListener('mouseover' , function(){document.body.style.backgroundColor = 'white'});

// white smoke function
document.getElementById('white-smoke').addEventListener('mouseover' , function(){document.body.style.backgroundColor = 'whitesmoke'});
