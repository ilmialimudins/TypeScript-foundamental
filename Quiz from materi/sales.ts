// function sales

function getSalesTaxes(price:any,tax:any):any{

    if(typeof (price||tax) != 'number'){
        return 'Inputn harus berupa angka'
    }else{
    return price+tax
}}
console.log('true',getSalesTaxes(4500,5))
console.log('false',getSalesTaxes('4500',5))