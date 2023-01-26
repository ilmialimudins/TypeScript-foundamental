// Construtor 

class Persons {
    nama:string;
    umur:number;
    pekerjaan:string;
    static status:string='oke';

    constructor(namaAwal:string, umur:number,pekerjaan:string){
        this.nama= namaAwal;
        this.umur=umur;
        this.pekerjaan=pekerjaan
    }

    set(namaAwal){
        this.nama=namaAwal
    }

    getNama(){
        return ` Nama saya ${this.nama}`
    }
}

let employee = new Persons('Danu',20,'Doctor');
console.log(employee.getNama());
console.log(Persons.status)