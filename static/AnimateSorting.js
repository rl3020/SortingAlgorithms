class AnimateSorting{
    constructor(heightValues, speed){
        this.elements = document.getElementsByClassName("box"); 
        this.heightValues = heightValues;
        this.speed = speed;
        this.colors = ["white", "blue"];
        this.currentColor = 0;
    }

    markCurrentElement = function(indx, color){ 
        this.elements[indx].className = "box";
        this.elements[indx].style.backgroundColor = color;
    }

    unmarkElement = function(indx){
        this.elements[indx].className = "box"; 
        this.elements[indx].style.backgroundColor = "aqua";
    }

    markSection = function(start, end, color=null){
        for(let i = start; i < end; i++){
            this.elements[i].className = "box";
            if(color !== null){
                this.elements[i].style.backgroundColor = color;
            }else{
                this.elements[i].style.backgroundColor = this.colors[this.currentColor];
            }
        }

        if(color === null){
            this.currentColor = (this.currentColor < this.colors.length) ? this.currentColor + 1 : 0;    
        }
        
    }

    mergeArrayAnimation = function(sorted, length){
        for(let i = 0; i < length; i ++){
            this.elements[i].style.height = `${sorted[i]}px`;
            this.elements[i].style.backgroundColor = 'gold';
        }
    }

    swap = function(j, i){       
        //html elements to change the heights of
        let jthElement = this.elements[j]; 
        let ithElement = this.elements[i];

        // height values of the swaped (post swap)
        // since this points to the same array being sorted
        let ithHeight = this.heightValues[i];
        let jthHeight = this.heightValues[j]; 

        //give the appropriate heights to the bars
        jthElement.style.height = `${jthHeight}px`;
        ithElement.style.height = `${ithHeight}px`; 
    }

    stall = async function(speed=this.speed){
        return new Promise( resolve => {
            setTimeout( function(){
                console.log("stalled!");
                resolve();
            }, 
            speed);
        });   
    }

    done = function(){
        let allElements = document.getElementsByClassName("box"); 
        for(let i=0; i < allElements.length; i ++){
            allElements[i].className = "box done";
        }
    }

}