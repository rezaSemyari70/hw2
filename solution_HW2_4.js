// BMI => mass( kg ) / ( height ** 2 )

// Category BMI         range - kg/m2
//-------------------------------------
// Thinness	             < 18.5
// Normal	             18.5 - 25
// Overweight	         25 - 30
// Obese                 > 30 
	     

function computBmi (  ){
    let weight = +prompt('Please enter your weight (to kg): ') ; 
    let height = +prompt('then enter your height (to meter): ') ;

    let bmi = weight / ( height ** 2) ;
    let answer ;

    switch( true ) {
       
        case( bmi < 18.5 ) :
            answer ='Thinness'  ;
            break ;
        case( bmi >= 18.5 && bmi < 25 ) :
            answer ='Normal' ;
            break ;
        case( bmi >= 25 && bmi < 30 ) :
            answer ='Overweight' ;
            break ;
        case( bmi >= 30 ) :
            answer ='Obese';
            break ;
        
    } 
    return answer ;  
}

