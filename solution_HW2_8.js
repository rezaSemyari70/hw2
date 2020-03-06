/*function caesar cipher
    A => D ... W => Z
    a => d ... w => z
    1 => 4  
*/

//encoding function
function caesarCipher (){
    let str = prompt('enter something (text or number) to encode ') ;
    let result = '';
    for(let i = 0; i < str.length; i++){
        if( str[i] === ' '){
            result += ' ';
        }else {
            result += String.fromCharCode(str[i].charCodeAt() + 3) ;
        }        
    }
    console.log(`${result}`); 
}

