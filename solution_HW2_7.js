// function with for of 

function sumArrayVAlue (arr){
    let sumOfArray = 0 ;
    for(let item of arr){
        sumOfArray += item ;      
    }
    return sumOfArray ;
}

//-------------------------------------------------

//simple function 

function sumArrayValue (arr ){
    let sumOfArray = 0 ;
    let i = 0 ;
    while(arr[i] != null){
        sumOfArray += arr[i++] ;
    }
    return sumOfArray ;
}


