 // solution by mr shobeiri 

 function numberToText ( number , order = 0 ) {
    const yekan = ["","یک","دو","سه","چهار","پنج","شش","هفت","هشت","نه"] ;
    const dahgan = ["","ده","بیست","سی","چهل","پنجاه","شصت","هفتاد","هشتاد","نود"] ;
    const sadgan = ["","صد","دویست","سیصد","چهارصد","پانصد","ششصد","هفتصد","هشتصد","نهصد"] ;
    const teens = ["ده","یازده","دوازده","سیزده","چهارده","پانزده","شانزده","هفده","هجده","نوزده"] ;
    const orderText = ["","هزار","میلیون","میلیارد","هزار میلیارد","هزار هزار میلیارد"] ;

    let res = "";
    let resultArray ;
    if(number > 1000){
        res = numberToText(Math.floor(number / 1000) , order + 1) ;
    }

    let stringNumber = "00" + String(number) ;
    stringNumber = stringNumber.substr(stringNumber.length - 3) ;

    if (stringNumber[1] === "1") {
        resultArray = [ sadgan[stringNumber[0]] , teens[stringNumber[2]] ] ;
    } else {
        resultArray = [ sadgan[stringNumber[0]] , dahgan[stringNumber[1]]  , yekan[stringNumber[2]] ] ;
    }

    return (res && res + " و ") + resultArray.filter( item => {
        return item ;
    }).join(" و ") + " " + orderText[order] ;
}

console.log(numberToText(2355451101)) ;


//***************************************************
//***************************************************


// My solution

let yekanArray = [ "","یک","دو","سه",
    "چهار","پنج","شش","هفت","هشت","نه"] ;    
let dahganArray1 = ["ده", "یازده","دوازده",
    "سیزده","چهارده","پانزده","شانزده","هفده",
    "هجده","نوزده"] ;    
let dahganArray2 = [ "","","بیست", "سی","چهل",
    "پنجاه","شصت","هفتاد","هشتاد","نود"] ;
let sadganArray = ["","صد","دویست","سیصد","چهارصد",
    "پانصد" ,"ششصد","هفتصد","هشتصد","نهصد"] ;
let setArray = ["هزار","میلیون","میلیارد"] ;

//function for convert 3 digit to persian text
function digitToText(number) { 
    let d1, d2 ;
    let answer = [] ;
    if(( number % 100 ) >= 10 &&   ( number % 100 ) < 20 ){
        d1 = dahganArray1[ number % 10 ] ;
    }else if( ( number % 100 ) >= 20 &&  ( number % 100 ) < 99 ){
        d1 = dahganArray2[ number % 100 ] + yekanArray[ number % 10 ] ;
    }else{
        d1 = yekanArray[ number % 100 ] ;
    }

    d2 = sadganArray[ number / 100 ] ;

    return ( console.log(answer.concat(d1 , 'و' , d2)) )  ;

       
}

//function for add milion , milyard
function numToPersianText (num){
    let answer = '';
    while(num > 0){
        for(let i = 0; i < 3; i++){
            answer += (`${digitToText(num % 1000)} و ${setArray[i]} `) ;  
        }
        num /= 1000;
    }  
    console.log(answer);    
}









