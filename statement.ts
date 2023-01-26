console.log(` `)
console.log(`Use If-else`);

let discount : number;
let itemCount  =20;
try{
    if(itemCount >0 && itemCount<= 5){
        discount= 5;
    }else if( itemCount>5 && itemCount <=10){
        discount =10;
    }else if(itemCount>10){
        discount=15;
    }else{
        throw new Error('The number of items cannot be negative!');
    }
    console.log(`you got ${discount}% discount. `)
}catch(e:any){
    console.log(e.message)
}

console.log('');
console.log('use switch-case');





try {
    switch(true){
        case itemCount > 0 && itemCount<=5:
        discount= 5;
        break;
        case itemCount > 5 && itemCount<=10:
        discount= 10;
        break;
        case itemCount > 10:
        discount= 15;
        break;
        default :throw new Error('The number of items cannot be negative!');
    }
    console.log(`you got ${discount}% discount. `)
}catch(e:any){
    console.log(e.message)
}