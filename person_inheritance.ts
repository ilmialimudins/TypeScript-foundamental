class PersonIn{
    nama:string;
    umur:number;
    pekerjan:string;

    constructor(namaAwal:string, umur:number,pekerjaan:string){
        this.nama= namaAwal;
        this.umur=umur;
        this.pekerjan=pekerjaan
    }

setNama(nama:string){
    this.nama=nama;
}

    getPersons(){
        return ` Nama saya ${this.nama} pekerjaan sebagai ${this.pekerjan}`
    }
}

class employee1 extends PersonIn{
    status:string
    constructor (nama:string, umur:number, pekerjaan:string,status:string){
        super (nama,umur,pekerjaan);
        this.status=status;
    }
    getNama(nama:string){
        return `Nama saya ${super.setNama(nama)} ${this.status}`
    }
}

let empBaru = new employee1('Baswedan',20,'Astronot','Menikah');
console.log(empBaru.getPersons()) // sebelum
empBaru.getNama(`zack's`); // metode baru
console.log(empBaru.getPersons()) //sesudah
