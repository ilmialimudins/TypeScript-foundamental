//convert to RUpiah

function convertRupiah(nilai:number, mataUang:string):any{
    if(mataUang=='yen'){
        return nilai*130.12
    }
    else if(mataUang=='usd'){
        return nilai*14382.5
    }
    else if(mataUang=='euro'){
        return nilai*16000
    }else{
        return 'No match type currency'
    }
}
  console.log(convertRupiah(100,'usd'))