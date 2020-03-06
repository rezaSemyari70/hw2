function patternDiamond (inputRow){
//loop for upper part     
    for(let i = 0; i < inputRow ; i++ ){
        let strRow = '' ;
        for(let j = i; j < inputRow - 1; j++){
            strRow += ' ' ;  
        }
        for(let j = 1 ; j <= 2*i + 1  ; j++ ){
            strRow += '*' ;
        }
        console.log(`${strRow} \n`);    
    }

    inputRow-- ;
    let contStar = (2 * inputRow - 1) ; // count of star in each row
// loop for lower part 
    for(let i = 1; i <= inputRow ; i++ ){
        let revRow = '' ; 
        for(let j = 1; j <= i; j++){
            revRow += ' ' ;
        }
        for(let j = i; j <= contStar; j++){
            revRow += '*' ;
        }
        contStar-- ;
        console.log(`${revRow} \n`) ;      
    }

}







