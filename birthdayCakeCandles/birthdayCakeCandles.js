function birthdayCakeCandles(candles) {
    let max=0;
    let count=0;
    for(let i=0; i<candles.length; i++){
        if(candles[i]>max){
            max=candles[i];
            count=0;
        }
        if(candles[i]==max){
            count++;
        }
    }
    return count;
}