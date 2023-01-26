//Extends
//Extend digunakan untuk mewariskan Sifat dari Class Parent

class BuahExtendsPrivate{
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
 
private setName(name:string){
     this.name=name
     } 
private setEnergi(energi:number){
         this.energi= energi
     }
private getStatusBuah(){
         return ` ini adalah Buah ${this.name} \n
         warnanya ${this.color} \n
         rasanya ${this.flavor}\n
         Mengandung Vitamin : ${this.vitamin}\n
         energi (Kcal/100g) : ${this.energi}\n`
     }
     getStatus(){
        return this.getStatusBuah
     }
 
private getProduksi(){
         return `buah ${this.name} ini dapat diolah menjadi :\n
         ${this.produksi}`
     }
     

 }

 //Class turunan
 class juiceMixPrivate extends BuahExtendsPrivate
    {
    constructor(name:string,color:string,flavor:string,vitamin:string,energi:number,produksi:string){
        super(name,color,flavor,vitamin,energi,produksi);
    }

    }
// console.log(juice.name);

const nanas = new juiceMixPrivate('nanas','kuning','asam','C',35,'juice');
console.log(nanas.getStatus());
 