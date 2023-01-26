// /*
// Juragan Rental memiliki kendaraan darat dan private jet yang disewakan seperti terlihat di excel.
// • Sang juragan ingin tahu berapa total vehicle dan total income baik semua type ataupun tiap tipe nya
// • Tugas kamu sebagai programmer:
// • Modelkan class model excel di slide
// • Terapkan encapsulation, inheritance, interface (Info Summary)
// • Report yang disajikan untuk juragan berupa summary dan detailnya.

// for Run Use terminal : ts-node ./juragan4

//Variable data yang berisi ARRAY OBject
let data = [
    {
      noPolice: "D 1001 UM",
      vehicleType: "SUV",
      year: "2010",
      price: 350000000,
      tax: 3500000,
      seat: 4,
      transactionDate: "10/01/2023",
      rent: 500000,
      driver: 150000,
      order: 0,
      orderPerKM: 0,
    },
    {
      noPolice: "D 1002 UM",
      vehicleType: "SUV",
      year: "2010",
      price: 350000000,
      tax: 3500000,
      seat: 4,
      transactionDate: "10/01/2023",
      rent: 500000,
      driver: 150000,
      order: 0,
      orderPerKM: 0,
    },
    {
      noPolice: "D 1003 UM",
      vehicleType: "SUV",
      year: "2015",
      price: 350000000,
      tax: 3500000,
      seat: 5,
      transactionDate: "12/01/2023",
      rent: 500000,
      driver: 150000,
      order: 0,
      orderPerKM: 0,
    },
    {
      noPolice: "D 1004 UM",
      vehicleType: "SUV",
      year: "2015",
      price: 350000000,
      tax: 3500000,
      seat: 5,
      transactionDate: "13/01/2023",
      rent: 500000,
      driver: 150000,
      order: 0,
      orderPerKM: 0,
    },
    {
      noPolice: "D 11 UK",
      vehicleType: "Taxi",
      year: "2002",
      price: 175000000,
      tax: 1750000,
      seat: 4,
      transactionDate: "12/01/2023",
      rent: 0,
      driver: 0,
      order: 45,
      orderPerKM: 4500,
    },
    {
      noPolice: "D 12 UK",
      vehicleType: "Taxi",
      year: "2015",
      price: 225000000,
      tax: 2250000,
      seat: 4,
      transactionDate: "13/01/2023",
      rent: 0,
      driver: 0,
      order: 75,
      orderPerKM: 4500,
    },
    {
      noPolice: "D 13 UK",
      vehicleType: "Taxi",
      year: "2020",
      price: 275000000,
      tax: 2750000,
      seat: 4,
      transactionDate: "13/01/2023",
      rent: 0,
      driver: 0,
      order: 90,
      orderPerKM: 4500,
    },
    {
      noPolice: "ID8089",
      vehicleType: "PrivateJet",
      year: "2015",
      price: 150000000000,
      tax: 1500000000,
      seat: 12,
      transactionDate: "23/12/2022",
      rent: 35000000,
      driver: 15000000,
      order: 0,
      orderPerKM: 0,
    },
    {
      noPolice: "ID8089",
      vehicleType: "PrivateJet",
      year: "2018",
      price: 175000000000,
      tax: 1750000000,
      seat: 15,
      transactionDate: "25/12/2022",
      rent: 55000000,
      driver: 25000000,
      order: 0,
      orderPerKM: 0,
    },
  ];


  //Langkah 2 Buat Interface
  interface infoSummary {
    GetTotalVehicle(type: string): number;
    GetTotalIncomeVehicle(type: string): string;
  }
  
  //Langkah 3 Buat Kelas Turunan
  class rentalService implements infoSummary {
    protected dataArray: any[];
  
    constructor(dataArray: any) {
      this.dataArray = dataArray;
    }
  
    //Langkah 4 Buat Mthode
    GetTotalIncomeVehicle(type: string): string {
      let total = 0;
      for (let getData of this.dataArray) {
        if (getData.vehicleType == type) {
          if (getData.rent == 0 && getData.driver == 0) {
            total += getData.order * getData.orderPerKM;
          } else {
            total += getData.rent + getData.driver;
          }
        }
      }
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(total);
    }
  
    GetTotalVehicle(type: string): number {
      let total = 0;
      for (let getData of this.dataArray) {
        if (getData.vehicleType == type) {
          total++;
        }
      }
      return total;
    }
  }
  
  //Langkah 5 Buat turunan dari kelas rental
  class juraganMobil extends rentalService {
    constructor(dataArray: any[]) {
      super(dataArray);
    }
  
    //Langkah 6 Buat Metode nya
    GetTotalIncomeVehicle(): string {
      let total = 0;
      for (let getData of this.dataArray) {
        if (getData.rent == 0 && getData.driver == 0) {
          total += getData.order * getData.orderPerKM;
        } else {
          total += getData.rent + getData.driver;
        }
      }
  
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(total);
    }
  
    GetTotalVehicle(): number {
      let total = 0;
      for (let getData in this.dataArray) {
        total++;
      }
  
      return total;
    }
  
    GetTotalIncomeVehicleType(type: string): string {
      return super.GetTotalIncomeVehicle(type);
    }
  
    GetTotalVehicleType(type: string): number {
      return super.GetTotalVehicle(type);
    }
  }
  
  //Langkah 7 RUn 
  let juragan = new juraganMobil(data);
  console.log("Total Kendaraan: ", juragan.GetTotalVehicle());
  console.log("Total Kendaraan SUV: ",juragan.GetTotalVehicleType("SUV"));
  console.log("Total Income Kendaraan SUV: ",juragan.GetTotalIncomeVehicleType("SUV"));
  console.log("Total Income Kendaraan Taxi: ",juragan.GetTotalIncomeVehicleType("Taxi"));
  console.log("Total Income Kendaraan Private Jet: ", juragan.GetTotalIncomeVehicleType("PrivateJet"));
  console.log("Total Income Kendaraan: ", juragan.GetTotalIncomeVehicle());