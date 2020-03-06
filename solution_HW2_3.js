//function for convert millisecond to underestend time

function toUnderstandableTime (milisec){
    let perMin = 60 * 1000 ;  // millisecond per minute
    let perHour = 60 * perMin ; // millisecond per hour
    let perDay = 24 * perHour ; // millisecond per day
    let day = Math.floor( milisec / perDay ) ;
    let hour = Math.floor( ( milisec - ( perDay * day) ) / perHour ) ;
    let minute = Math.floor( ( milisec - ( ( perHour * hour ) + ( perDay * day ) ) ) / perMin ) ;
    let second = Math.floor( ( milisec - ( ( perDay * day ) + ( perHour * hour ) + ( perMin * minute ) ) ) / 1000 ) ;
    console.log (`
        ${ day }  Days
        ${ hour } hours 
        ${ minute } minutes
        ${ second } second
        ${ milisec % 1000 } milliseconds `);
        
}










