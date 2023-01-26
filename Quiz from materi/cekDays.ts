//getDays

function getDays(month:any,year:any):any{
   
        if(isNaN(month||year)){
            return 'Value must be in Character'
        }if(year%4==0 &&(year%100!==0||year%400 ===0)){
            let date = new Date(year,month,0)
            return ' this month has '+date.getDate()+" days, "+year+" ini adalah tahu kabisat";
        }
        else{
           let date = new Date(month,year,0)
            return date.getDate();
        }
}
console.log(getDays(2,2000));