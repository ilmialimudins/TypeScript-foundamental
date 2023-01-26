//sumDigit
function sumDigit(n:number):number{
    let sum = 0;
    let digits =n.toString().split('');
    for(let digit of digits){
         sum += parseInt(digit);
    }return sum;
}
console.log(sumDigit(1234));


