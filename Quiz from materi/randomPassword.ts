//getRandomPassword

function getRandomPassword(s:any):any{
    if(s.length<6){
    return 'Input tidak valid : Password harus lebih dari 6'
    }
    if(! isNaN(s)){
        return 'Value must be in Character'
    }else{
        let arr = s.split('');
        arr.sort(()=>Math.random()-0.5);
        // let password = arr.slice(0,8).join('');
        let password ='';
        for(let i=0; i<6; i++){
            password+=arr[i];
            if(i<5){
                password+=Math.floor(Math.random()*10).toString();
            }
        }
        return password;
    }
}
console.log(getRandomPassword('ahah'));