//elapsedTime

function elapsedTime(seconds:number):any{
    if( isNaN(seconds) ){
        return 'Inputn harus berupa angka';
    }else{
        let detik =seconds %60; //1 detik
        let sisaMenit = Math.floor(seconds/60); //60*seconds; //60 detik
        let menit = sisaMenit % 60;
        let sisaJam = Math.floor(sisaMenit/60); 
        let jam = sisaJam %24;     //60*60*seconds; //3600 detik
        let hari = Math.floor(sisaJam/24); //86.400 detik
       
        return hari + 'hari, ' + jam + 'jam, '+ menit + 'menit '+ detik+ 'detik '
    }
}
console.log(elapsedTime(700005));