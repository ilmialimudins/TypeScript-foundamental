// totalGaji

function totalGaji(gaji1:number,gaji2:number,gaji3:number):any{
    let emp1= gaji1 + (gaji1 *2/100)
    let emp2= gaji2 + (gaji2 *5/100)
    let emp3= gaji3 + (gaji3 *10/100)
    let total = emp1+emp2+emp3
    
    return "Total gaji yang harud dibayar"+'\n'+
            'Emp1: Rp.'+gaji1+' + Pajak(2%)=Rp.'+emp1+'\n'+
            'Emp2: Rp.'+gaji2+' + Pajak(5%)=Rp.'+emp2+'\n'+
            'Emp3: Rp.'+gaji3+' + Pajak(10%)=Rp.'+emp3+'\n'+
            'Total : Rp.'+total
};

console.log(totalGaji(500,2000,12000))