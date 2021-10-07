
const sortingAlgorithms = ["insertionSort","selectionSort","mergeSort"];
var chosenAlgo = sortingAlgorithms[0];
var currentArray = [];

var selectionSort = document.getElementById("selectionSort"); 
var insertionSort = document.getElementById("insertionSort"); 
var mergeSort = document.getElementById("mergeSort"); 

var inputBars = document.getElementById("myRange");
var runButton = document.getElementById("run-button");
var resetButton = document.getElementById("reset-button");

let optionSelected = function(selected){ 
    console.log("option selected: ", selected, " with array ", currentArray);

    let options = { 
        "insertionSort": document.getElementById("insertionSort"), 
        "selectionSort": document.getElementById("selectionSort"), 
        "mergeSort": document.getElementById("mergeSort")
    }

    options[selected].style.cssText = "background-color: grey;"; 
    let notselected = Object.keys(options); 
    for(const key of notselected){
        if(key !== selected){
            options[key].style.cssText = "background-color: aqua;";
        }
    }

    chosenAlgo = selected;
}

let createBarsAndLoad = function(array){   
    console.log("createAndLoadBars");
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
    console.log("generate random arrray of numbers");
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
    console.log("new array: ", newArray);
    createBarsAndLoad(newArray);
};

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
    optionSelected(chosenAlgo);
}


let run = function(){
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


//option selected for sorting
selectionSort.addEventListener("click", function(){optionSelected("selectionSort");} ); 
insertionSort.addEventListener("click", function(){optionSelected("insertionSort");} ); 
mergeSort.addEventListener("click", function(){optionSelected("mergeSort");} ); 

//change the number of bars
inputBars.addEventListener("input", changeNumberOfBars);

//get button to run 
runButton.addEventListener("click", run );

//reset values of bars
resetButton.addEventListener("click", resetBars);

//initiate window
window.onload = loadWindow;


