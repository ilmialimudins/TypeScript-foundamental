//acces PROTECTED
// atribut class hanya dapat di akses di class parent dan chil saja
class Buah1{
   protected name:string = '';
   protected color : string ='';
   protected flavor:string ='';
   protected vitamin:string='';
   protected energi:number=0;
   protected produksi:string='';

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
 let apel1 = new Buah1();
apel1.setName('Apel Merah');
apel1.setEnergi(200)

//  apel.name= 'Apel';
//  apel.color= 'Merah';
//  apel.flavor= 'Manis';
//  apel.vitamin= `A, B, C dan Kalium`;
//  apel.energi= 52.1;
//  apel.produksi= `Juice , Kripeik, Pie`
 console.log(apel1.getStatusBuah())
 console.log(apel1.getProduksi())

