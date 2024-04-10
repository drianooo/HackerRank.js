function plusMinus(arr) {
    let pos=0;
    let neg=0;
    let zero=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            pos++;
        }
        if(arr[i]<0){
            neg++;
        }
        if(arr[i]==0){
            zero++;
        }
    }
    console.log((pos/arr.length).toFixed(6));
    console.log((neg/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}