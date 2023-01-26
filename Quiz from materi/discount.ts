function getSalesDiscount(price:any,tax:any,discount:any):any{

    if(typeof (price||tax||discount) != 'number'){
        return 'Inputn harus berupa angka'
    }else{
     let a = (price+(price*discount/100))
     let b = (price+(price*discount/100))*10/100
     return a+b
}}
console.log(getSalesDiscount(4500,10,5))
console.log('false',getSalesDiscount('4500',10,5))