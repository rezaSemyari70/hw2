//function convert inch to meter
// 1 inch = 2.54 cm 

function inchTometer (){
    let inchValue = +prompt('Enter value (in meter) : ', '0') ;
    let meterValue = inchValue * 0.0254 ;
    return meterValue ;
}