
const sortingAlgorithms = ["insertionSort","selectionSort","mergeSort"];
var chosenAlgo = sortingAlgorithms[0];
var currentArray = []; //array of integers representing height of the bars


var inputBars = document.getElementById("myRange");
var runButton = document.getElementById("run-button");
var resetButton = document.getElementById("reset-button");


let createBarsAndLoad = function(array){   
    console.log("createAndLoad()");
    var container = document.getElementById("bar-container"); 
    container.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        let bar = document.createElement("div");
        bar.className = "box";
        bar.style.cssText = "height: " + String(array[i]) + "px;";
        container.appendChild(bar);
    }
}


let generateRandomArrayOfNumbers = function(length){ 
    console.log("generateRandomArrayOfNumbers()");
    let randomNumberGenerator = function(min, max){
        var number = Math.floor(Math.random() * (max - min + 1)) + min;
        return number; 
    }

    let array = []; 
    for(let i = 0; i < length; i ++){
        array.push(randomNumberGenerator(15, 400)); 
    }
    return array; 
}

let changeNumberOfBars = function(){
    console.log("changing num of bars"); 
    let rangeValue= document.getElementById("range-value");
    let myRange = document.getElementById("myRange"); 
    rangeValue.innerHTML = String(myRange.value);
    var number_of_bars = myRange.value; 
    let newArray = generateRandomArrayOfNumbers(number_of_bars);
    currentArray = newArray;
    createBarsAndLoad(newArray);
};

let run = function(){
    //get selected sorting algorithm
    let optionSelected = document.getElementById('sort-options');
    chosenAlgo = String(optionSelected.value);

    //use this to help sort array visually
    let sortingAlgorithms = new SortingAlgorithms(currentArray);

    if(chosenAlgo === "selectionSort"){
        sortingAlgorithms.selctionSort();
    }
    else if(chosenAlgo === "insertionSort"){
        sortingAlgorithms.insertionSort(); 
    }
    else if(chosenAlgo === "mergeSort"){
        sortingAlgorithms.mergeSort();
    }
}

let resetBars = function(){ 
    console.log("reset Bars"); 
    let size = document.getElementById("myRange").value;
    const array = generateRandomArrayOfNumbers(size); 
    currentArray = array;
    createBarsAndLoad(array);
}

let loadWindow = function(){
    let start = 25;
    let array = generateRandomArrayOfNumbers(start);
    currentArray = array;
    createBarsAndLoad(array);
}


//change the number of bars
inputBars.addEventListener("input", changeNumberOfBars);

//get button to run 
runButton.addEventListener("click", run );

//reset values of bars
resetButton.addEventListener("click", resetBars);

//initiate window
window.onload = loadWindow;
