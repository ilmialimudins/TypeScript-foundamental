
class sum{
    operations(a:number, b:number):number{
        return a+b;
    }
}

class multiply extends sum{
    //Override the operations ,ethod by keeping parametes and returns type same
    operations(a: number, b: number): number {
        return a*b
    }
}

let multi = new multiply();
let result = multi.operations(10,20);
console.log('result after operation '+result)




class Employee1 {
    about():void{
        console.log("Inside the employee class");
    }
}

class men extends Employee1{
    gender: string ="Male";
    about():void{
        super.about();
        console.log("the gender of the Employee is "+ this.gender);
    }
}
let new_men = new men();
new_men.about();