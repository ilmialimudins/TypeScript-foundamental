/*
sebuah class yang didalamnya ada abstract method yakni method yang belum diimplementasiakan,
implementasi beberapa atau semua method
*/

abstract class Employee{
    constructor(protected firtsName:string, private lastName:string){
    }
    abstract getSalary():number;
    abstract getFirstName():string;
    fullName():string{
        return `${this.firtsName} ${this.lastName}`;
    }
    compensationStatement():string{
        return `${this.fullName()} make ${this.getSalary()} a month`;
    }
}

class FullTimeEmployee extends Employee{
    constructor (firstName:string, lastName:string, protected rate: number, protected hours: number){
        super(firstName,lastName);

    }
    getSalary(): number {
        return this.rate*this.hours;
    }
    getFirstName(): string {
        return this.firtsName;
    }
    // getFirstName():string{
    //     return this.fi
    // }
}

let emp2 = new FullTimeEmployee('Muhammad','ilmi',350000,40);
console.log(emp2.getSalary());
console.log(emp2.compensationStatement());