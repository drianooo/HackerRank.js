function miniMaxSum(arr) {
    let min=arr[1];
    let max=arr[1];
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
        if(min>arr[i]){
            min=arr[i];
        }
        if(max<arr[i]){
            max=arr[i];
        }
    }
    console.log((sum-max) + " " + (sum-min));
}