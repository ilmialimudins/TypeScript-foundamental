//menghitung jarak

function jarak(a:number, t:number):any{
    if(typeof (a|t) != 'number'){
        return 'Inputn harus berupa angka'
    }else if( a <= 0 || t<= 0) {
        return ' Inputan harus lebih dari nol'
    }else{
    return 1/2*a*t**2+' meter/s'
}
}
console.log('true',jarak(5,60))
console.log('false',jarak(-1,60))