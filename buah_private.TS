//acces PRIAVTE
// atribute hanya dapat di Parent class itu sendiri
class Buah2{
   private name:string = '';
   private color : string ='';
   private flavor:string ='';
   private vitamin:string='';
   private energi:number=0;
   private produksi:string='';

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
 let apel2 = new Buah2();
apel1.setName('Apel Merah');
apel1.setEnergi(200)

//  apel.name= 'Apel';
//  apel.color= 'Merah';
//  apel.flavor= 'Manis';
//  apel.vitamin= `A, B, C dan Kalium`;
//  apel.energi= 52.1;
//  apel.produksi= `Juice , Kripeik, Pie`
 console.log(apel2.getStatusBuah())
 console.log(apel2.getProduksi())

