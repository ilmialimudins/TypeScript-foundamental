interface Method{

     setName(name:string):boolean;
     setEnergi(energi:number):number
}
    interface NewBuahInterface extends Method{
     setColor(color:string):boolean;
        
    }

 //Class turunan
 class Buah implements NewBuahInterface{
    setName(name:string){
        console.log(`ini namanya Buah  ${name} `);
        return true;
    }
    setEnergi(energi:number):number{
        console.log(10);
        return 10;
        
    }
    setColor(color:string){
    console.log(`ini namanya Buah  ${color} `);
    return true;
    }
}
    
const avocado2 = new Buah();
console.log(avocado2.setName('Melon'));
console.log(avocado2.setEnergi(25));
console.log(avocado2.setColor('Hijau'));
 