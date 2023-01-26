abstract class BuahAbstract{
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
     setName(name:string){
     this.name=name
     }
     setEnergi(energi:number){
         this.energi= energi
     }
    abstract getAbstractStatusBuah():string;
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

     //abstract nama(): tipe;
     abstract getName():string;

     }
 

 //Class turunan
 class milkJuice extends BuahAbstract{
    constructor(name:string,color:string,flavor:string,vitamin:string,energi:number,produksi:string){
        super(name,color,flavor,vitamin,energi,produksi);
    }
    getName(): string {
        return this.name
    }
    getAbstractStatusBuah(): string {
        return ` ini adalah Buah ${this.name} \n
         warnanya ${this.color} \n
         rasanya ${this.flavor}\n
         Mengandung Vitamin : ${this.vitamin}\n
         energi (Kcal/100g) : ${this.energi}\n`
    }

    }
// console.log(juice.name);

const avocado = new milkJuice('avocado','merah','asam','C',35,'juice');
console.log(avocado.getName());
console.log(avocado.getAbstractStatusBuah());
 