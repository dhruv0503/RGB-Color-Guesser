var numsquares = 6;
var colors = colorsGenerator(numsquares);
var squares = document.querySelectorAll(".square");
var rgbHead = document.getElementById("rgbHead");
var pickedColor = colorPicker();
rgbHead.innerHTML = pickedColor
var result = document.getElementById("result");
var heading = document.querySelector("h1");
var starter = document.getElementById("starter");
var difficultyEasy = document.getElementById("difficultyEasy");
var difficultyHard = document.getElementById("difficultyHard");

function reset(){
    result.innerText = "";
    starter.innerHTML= "New Game"; 
    colors = colorsGenerator(numsquares);
    pickedColor = colorPicker(); 
    rgbHead.innerHTML = pickedColor;
    heading.style.backgroundColor = "steelblue";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
        
   }
}
difficultyEasy.addEventListener("click", function(){
    starter.innerHTML = "New Game";
    difficultyEasy.classList.add("selected");
    difficultyHard.classList.remove("selected");
    numsquares = 3;
    reset();
})
difficultyHard.addEventListener("click", function(){
    starter.innerHTML = "New Game";
    difficultyHard.classList.add("selected");
    difficultyEasy.classList.remove("selected");
    numsquares = 6;
    reset()
});
starter.addEventListener("click", function(){
    reset();
});


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var chosen = this.style.backgroundColor;
        if( chosen === pickedColor){
            result.innerHTML = "Correct";
            starter.innerHTML = "Play Again?";
            changeColors(pickedColor);
            heading.style.backgroundColor = pickedColor;
            
        }else{
            this.style.backgroundColor = "rgb(20, 20, 20)";
            result.innerHTML = "Try Again";
        }
    });
}


function changeColors(color){
    for(var j = 0; j < squares.length; j++){
        squares[j].style.background = color;
    }
}

function colorPicker(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function colorsGenerator(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
