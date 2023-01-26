//getHeavier

function getHeavier(w1:any,w2:any,w3:any):any{
if ( w1>w2 && w1>w3){
    return w1 +' Heavier is w1';
}if (w2>w1 && w2>w3 ){
    return w2 +' Heavier is w2';
}if (w3>w2 && w3>w1){
    return w3 +' Heavier is w3';
}else{
    return "masukan nilai"
}
}
console.log(getHeavier(70,45,12));