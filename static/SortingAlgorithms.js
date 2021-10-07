
class SortingAlgorithms{
    constructor(array)
    {
        this.array = array; 
        this.tracker = 1;
    }

    insertionSort = async function(){ 
        let array = this.array; 
        
        let animate = new AnimateSorting(this.array, 500);
        for(let i = 1; i < array.length; i ++){

            let j = i  - 1; 
            let key = array[i]; 

            while(j >= 0 && array[j] > key){
                animate.markCurrentElement(j + 1, "darkblue");
                animate.markCurrentElement(j, "darkblue");
                await animate.stall();

                let temp = array[j + 1]; 
                array[j + 1] = array[j];
                array[j] = temp;
                animate.swap(j, j + 1);
                animate.unmarkElement(j);
                animate.unmarkElement(j + 1);
                j -= 1; 
            }   
        }
        await animate.stall();
        animate.done();

        return array; 
    }


    selctionSort = async function(){
        let array = this.array;
        let animate = new AnimateSorting(this.array, 400);

        for(let i = 0; i < array.length - 1; i++){
            let minIndex = i; 
            animate.markCurrentElement(i, "pink");

            for(let j = i + 1; j < array.length; j++ ){
                animate.markCurrentElement(j,"darkblue");
                await animate.stall();

                if(array[j] < array[minIndex]){
                    animate.markCurrentElement(j,"pink");
                    await animate.stall();
                    animate.unmarkElement(minIndex);
                    minIndex = j; 
                }
                else{
                    animate.unmarkElement(j);
                }
            }

            //swap new minIndex with old
            let temp = array[i]; 
            animate.markCurrentElement(i, "gold");
            animate.markCurrentElement(minIndex, "gold");
            await animate.stall();
            array[i] = array[minIndex]; 
            array[minIndex] = temp;
            animate.swap(minIndex, i); 
            animate.unmarkElement(minIndex);

        }

        await animate.stall();
        animate.done();

        return array;
    }


    mergeSort = async function(){
        let animations = new AnimateSorting(this.array , 500);
        this.array = await this.mergeSortHelper( this.array, animations );
        console.log("After mergesort complete: " , this.array);
    }



    // recursive function to divide array and combine when sorted
    
    mergeSortHelper = async function(array, animations){
        //base case
        if(array.length <= 1){
            return array;
        }

        let mid = Math.floor(array.length / 2); 

        animations.markSection(0, mid);
        await animations.stall();
        let leftArray = await this.mergeSortHelper(array.slice(0, mid), animations);
        
        animations.markSection(mid, array.length);
        await animations.stall();
        let rightArray = await this.mergeSortHelper(array.slice(mid), animations);
        

        let result = await this.merge(leftArray, rightArray, 0, mid);
        return result;
    }

    // merging function for merge sort 
    merge =  async function(leftArray, rightArray, left, mid){
        let sortedArray = [];
        let animations = new AnimateSorting(this.array, 400);

        while(leftArray.length && rightArray.length){
            if(leftArray[0] < rightArray[0]){
                sortedArray.push(leftArray.shift());
            }else{
                sortedArray.push(rightArray.shift());
            }
        }
        
        while(leftArray.length){
            sortedArray.push(leftArray.shift());
        }
        while(rightArray.length){
            sortedArray.push(rightArray.shift());
        }

        animations.mergeArrayAnimation(sortedArray, sortedArray.length);
        return sortedArray;
    }

}


