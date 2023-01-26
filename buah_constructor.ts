//Constructor dapat mempermudah membuat objek baru sesuai Parent class
class BuahConstructor{
    private name:string ;
    private color : string;
    private flavor:string ;
    private vitamin:string;
    private energi:number;
    private produksi:string;

    constructor(name:string,color:string,flavor:string,vitamin:string,energi:number,produksi:string){
this.name=name;
this.color=color;
this.flavor=flavor;
this.vitamin=vitamin;
this.energi=energi;
this.produksi=produksi;
    }
 
     setName(name:string){
     this.name=name
     }
 
     setEnergi(energi:number){
         this.energi= energi
     }
     getStatusBuah(){
         return ` ini adalah Buah ${this.name} \n
         warnanya ${this.color} \n
         rasanya ${this.flavor}\n
         Mengandung Vitamin : ${this.vitamin}\n
         energi (Kcal/100g) : ${this.energi}\n`
     }
 
     getProduksi(){
         return `buah ${this.name} ini dapat diolah menjadi :\n
         ${this.produksi}`
     }
 
 }

 

  let melon = new BuahConstructor('melon','hijau','manis','C',5.35,'juice');
 
console.log(melon.getStatusBuah());
 
 