//getProsentase

function getProsentase(income1:any,income2:any):any{
    if(isNaN(income1 || income2)){
        return 'Value must be in Character'}
        else{
            if (income1<income2){
                let untung = income2-income1
                let presentase= untung/income1*100
                return "Total Kenaikan income "+presentase+ '%'
            }
            if (income1>income2){
                let untung = income2-income1
                let presentase= untung/income1*100
                return "Total Penurunan income "+presentase+ '%'
            }
        }
        
} console.log(getProsentase(750000,600000))