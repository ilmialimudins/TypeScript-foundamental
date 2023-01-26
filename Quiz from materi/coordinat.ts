// getCordinat

function getCordinat(x1:any,y1:any,x2:any,y2:any):any{
    if( isNaN(x1) ||isNaN(y1) || isNaN(x2) ||isNaN(y1) ){
        return 'Inputn harus berupa angka';
    }else{
        let d= Math.sqrt((x1-x2)**2  +(y1-y2)**2);
        return d
    }
}
console.log(getCordinat(3,4,-4,-5));
console.log(getCordinat('3','4','-4','-5'));

// function getDistance(x1: number, y1: number, x2: number, y2: number): number {
//     let d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
//     return d;   
//   }
  
//   let distance = getDistance('3', 4, -4, -5);
//   console.log(distance);