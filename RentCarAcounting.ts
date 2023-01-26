let  dataJuraganMobil2=[
    {
        noPolis: 'D 1001 UM',
        VehicleType: 'SUV',
        Year: 2010,
        Price: 350000000,
        Tax: 3500000,
        Seat:4,
        TransactionDate:'10/01/2023',
        Rent:500000,
        Driver:150000,
        Order:0,
        OrderPKM:0
    },
    {
        noPolis: 'D 1002 UM',
        VehicleType: 'SUV',
        Year: 2010,
        Price: 350000000,
        Tax: 3500000,
        Seat:4,
        TransactionDate:'10/01/2023',
        Rent:500000,
        Driver:150000,
        Order:0,
        OrderPKM:0
    },
    {
        noPolis: 'D 1003 UM',
        VehicleType: 'SUV',
        Year: 2015,
        Price: 350000000,
        Tax: 3.500000,
        Seat:5,
        TransactionDate:'12/01/2023',
        Rent:500000,
        Driver:150000,
        Order:0,
        OrderPKM:0

    },{
        noPolis: 'D 1004 UM',
        VehicleType: 'SUV',
        Year: 2015,
        Price: 350000000,
        Tax: 3.500000,
        Seat:5,
        TransactionDate:'13/01/2023',
        Rent:500000,
        Driver:150000,
        Order:0,
        OrderPKM:0
    },{
        noPolis: 'D 11 UK',
        VehicleType: 'Taxi',
        Year: 2002,
        Price: 175000000,
        Tax: 1750000,
        Seat:4,
        TransactionDate:'12/01/2023',
        Rent:0,
        Driver:0,
        Order:45,
        OrderPKM:4500
    },
    {
        noPolis: 'D 12 UK',
        VehicleType: 'Taxi',
        Year: 2015,
        Price: 225000000,
        Tax: 2250000,
        Seat:4,
        TransactionDate:'13/01/2023',
        Rent:0,
        Driver:0,
        Order:75,
        OrderPKM:4500
    },{
        noPolis: 'D 13 UK',
        VehicleType: 'Taxi',
        Year: 2020,
        Price: 275000000,
        Tax: 2750000,
        Seat:4,
        TransactionDate:'13/01/2023',
        Rent:0,
        Driver:0,
        Order:90,
        OrderPKM:4500

    },{ 
    noPolis: 'ID8089',
    VehicleType: 'TaPrivateJet',
    Year: 2015,
    Price: 150000000000,
    Tax: 1500000000,
    Seat:12,
    TransactionDate:'23/12/2023',
    Rent:35000000,
    Driver:15000000,
    Order:0,
    OrderPKM:0

    },{
        
    noPolis: 'ID8089',
    VehicleType: 'TaPrivateJet',
    Year: 2018,
    Price: 175000000000,
    Tax: 1750000000,
    Seat:15,
    TransactionDate:'25/12/2023',
    Rent:55000000,
    Driver:25000000,
    Order:0,
    OrderPKM:0,
    total: 8000000
    }
]


interface infoSumarry2{
    getAllIncome(type?:any):any
}

class rentServis {
    protected dataArray:any[]
    constructor(dataArray:any){this.dataArray=dataArray}
    
    getAllIncome(type?:any):any {

        let total=0;
        for(let getFile of this.dataArray){
            if(!type){
                total++

            }else{if(getFile.VehicleType==type){
                total++
            }}
            // if(getFile.VehicleType==type){
            //    total++
            // }else{
            //     total++
            // }
        }
        return total
    }

    getAllTotalVehicel(type?:string):any{
        let total=0;
        for(let getFile of this.dataArray){
            // console.log(getFile.Order,':',getFile.OrderPKM,':', getFile.Rent,':', getFile.Driver)
            // console.log(type);
            // console.log(getFile.vehicleType);
            if(getFile.VehicleType==type){
                if(getFile.Rent==0 && getFile.Driver==0){
                    total += getFile.Order * getFile.OrderPKM
                }else{
                    total +=getFile.Rent + getFile.Driver;
                }
            }
        }
        return total;

    }
    protected GetYear(item:any){
        let tahun=0;
        for(let bebas of this.dataArray){
            // console.log(bebas.Rent)
        if(bebas.Year== item){
            tahun += (bebas.Rent + bebas.Driver)
            }
            return tahun
        } 
    }


}



// // let rentalService3 = new rentServis(dataJuraganMobil2)
// console.log(rentalService3.getAllIncome());
// console.log(rentalService3.getAllTotalVehicel('SUV'));
// // console.log(dataJuraganMobil)

// console.log(dataJuraganMobil2.length);
// let tot=0
// for (const iterator of dataJuraganMobil2) {
//     for (const key in iterator) {
//         tot++
//     }
    
// }
// console.log(tot)


class hrUtama extends rentServis implements infoSumarry2{
constructor (dataArray:any[])
{super(dataArray)}
GetYearchild(thn:number){
 return super.GetYear(thn)
}
// GetYear(item:any){
//     let tahun=0;
//     for(let bebas of this.dataArray){
//         // console.log(bebas.Rent)
//     if(bebas.Year== item){
//         tahun += (bebas.Rent + bebas.Driver)
//         }
//         return tahun
//     } 
// }


}

let year = new hrUtama(dataJuraganMobil2)
console.log(year.GetYearchild(2010))
// console.log(year.getAllTotalVehicel());
console.log(year.getAllIncome('SUV'));
console.log(year.getAllIncome());

