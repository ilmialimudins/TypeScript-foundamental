//isPalindrome

function isPalindrome(angka:number):any{
    if(isNaN(angka)){
        return 'Value must be in Character'}
    else{
        let convertStirng = angka.toString();
        for(let i=0; i<convertStirng.length/2; i++){
            if(convertStirng.charAt(i)!==convertStirng.charAt(convertStirng.length-1-i)){
                // console.log(convertStirng.charAt(i))
                // console.log(convertStirng.charAt(convertStirng.length-1))
                return ' not isPalindrome';
            }else{
                return "isPalindrome"
            }
        }
        }
}
console.log('true : 12321',isPalindrome(12321))
console.log('false : 12345',isPalindrome(12345))
