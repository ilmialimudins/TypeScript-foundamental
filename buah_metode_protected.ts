//Extends
//Extend digunakan untuk mewariskan Sifat dari Class Parent

class BuahMetode{
    protected name:string ;
    protected color : string;
    protected flavor:string ;
    protected vitamin:string;
    protected energi:number;
    protected produksi:string;

constructor(name:string,color:string,flavor:string,vitamin:string,energi:number,produksi:string){
this.name=name;
this.color=color;
this.flavor=flavor;
this.vitamin=vitamin;
this.energi=energi;
this.produksi=produksi;
    }
 
protected setName(name:string){
     this.name=name
     } 
protected setEnergi(energi:number){
         this.energi= energi
     }
protected getStatusBuah(){
         return ` ini adalah Buah ${this.name} \n
         warnanya ${this.color} \n
         rasanya ${this.flavor}\n
         Mengandung Vitamin : ${this.vitamin}\n
         energi (Kcal/100g) : ${this.energi}\n`
     }
 
protected getProduksi(){
         return `buah ${this.name} ini dapat diolah menjadi :\n
         ${this.produksi}`
     }
 
 }

 //Class turunan
 class juiceMix extends BuahMetode{
     getStatus(){
         return this.getStatusBuah();
     }
    constructor(name:string,color:string,flavor:string,vitamin:string,energi:number,produksi:string){
        super(name,color,flavor,vitamin,energi,produksi);
    }

    }
// console.log(juice.name);

const mangga = new juiceMix('mangga','merah','asam','C',35,'juice');
console.log(mangga.getStatus());
 