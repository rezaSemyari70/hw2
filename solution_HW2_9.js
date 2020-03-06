/*function decode caesar cipher
    D => A ... Z => W
    d => D ... z => Z
    4 => 1 
*/

//decoding function of caesar cipher
function deCodeCaesarCipher (){
    let str = prompt('enter something (text or number) for decode')
    let result = '' ;
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            result += ' ' ;
        }else{
            result += String.fromCharCode(str[i].charCodeAt() - 3) ;
        }
    }
    console.log(`${result}`) ;
    
}