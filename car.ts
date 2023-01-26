
class Cars {
    brand : string=''
    speed:number=0
    price:number=0

    getBrand():string{
        return `Merek mobil ini ${this.brand}`
    };

    getPrice(){
        return `Harga mobil ini ${this.price}`
    };
    getSpeed(){
        return `Kecepatan mobil merek  ${this.brand} ${this.price}`
    };
}
let mobilBaru = new Cars()
mobilBaru.brand='Toyota';
mobilBaru.speed=1000;
mobilBaru.price= 15000000;

console.log(mobilBaru.getBrand());