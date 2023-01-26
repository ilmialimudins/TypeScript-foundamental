// function tambah(x=49854854778,y=5){
//     return(x+y)
// }

// tambah()


// let add:(x:number, y:number)=> number;

// add=function(x:number, y:number){
//     return x+y
// }
// console.log(add(10,12));

// optional parameter
// function multiply(a:number)


// Rest Parameter
// function getTotal(...numbers:number[]):number{
//     let total=0;
//     numbers.forEach((num)=> total+=num);
//     return total;
// }

// console.log(getTotal());
// console.log(getTotal(10,20));
// console.log(getTotal(10,20,30));
// ____________________________________________________

// function tambah(x:number,y:number,...numbers:number[]):any{
//     let total:number=0
//     numbers.forEach(e=>total+=e+x+y)
//    console.log(numbers)
// }

// tambah(10,2)


// overloading Function

function tambah_gen(a:any,b:any):any{
    return a+b
}
console.log(tambah_gen(1,2))