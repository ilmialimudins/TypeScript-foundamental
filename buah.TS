//acces PUBLIC
//atribut dapat diakses di class parent, child dan mana aja

class Buah{
    name:string = '';
    color : string ='';
    flavor:string ='';
    vitamin:string='';
    energi:number=0;
    produksi:string='';

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
 let apel = new Buah();
 apel.name= 'Apel';
 apel.color= 'Merah';
 apel.flavor= 'Manis';
 apel.vitamin= `A, B, C dan Kalium`;
 apel.energi= 52.1;
 apel.produksi= `Juice , Kripeik, Pie`
 console.log(apel.getStatusBuah())
 console.log(apel.getProduksi())
