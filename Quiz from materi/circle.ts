// function menghitung luas lingkaran
// rumus phi * r^2

function lingkaran( r:any):any{
   const phi=3.14
   if(r<=0){
    return 'Masukan angka yang lebih tinggi'
   }else if( typeof r != "number"){
    return 'Inputan harus berupa angka !';
   }else{
    return phi * r**2
   }
}
console.log('true',lingkaran(5));
console.log('false',lingkaran('1'));
