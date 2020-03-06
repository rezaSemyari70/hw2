
//selection sort 
function selectionSortNumbers(arr){
    for(let i = 0; i < 14; i++){
        let indexOfMin = i ;
        for(let j = i + 1; j < 15; j++ ){
            if(arr[ j ] < arr[ indexOfMin ]){
                indexOfMin = j ;
            }
        }
        let temp = arr[ i ] ;
        arr[ i ] = arr[ indexOfMin ] ;
        arr[ indexOfMin ] = temp ;
    }
    for(let item of arr){
        console.log(`${item}`); 
    }  
}

//----------------------------------------------------

//bubble sort 
function bubbleSortNumbers (arr){
    
    for(let i = 1; i < 15; i++){
        for(let j = 0; j < 15 - i; j++ ){
            if( arr[ j ] > arr[ j + 1 ] ){ 
                let temp = arr[ j ] ;
                arr[ j ] = arr[ j + 1 ] ;
                arr[ j + 1 ] = temp ;
            }
        }
    }
    for(let i = 0; i < 15; i++){
        console.log(arr[ i ]);   
    }   
}


