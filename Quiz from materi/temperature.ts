//  konversi suhu fahreint ke kelvin

function suhu(f:any):any{
    if(typeof f == 'string' ){
        return 'Fahreint must an number'
    }else{
        return Math.round ((f+459.67)/1.8)
    }
}
console.log('true',suhu(1))
console.log('false',suhu('1'))