function getTotalX(a, b) {
    let s=b[0];
    let maybe=0;
    let almost=[];
    let yes=[];
    for(let i=0;i<b.length;i++){
        if(b[i]<s){
            s=b[i];
        }
    }
    for(let i=1; i<=s; i++){
        maybe=0;
        for(let j=0; j<a.length; j++){
            if(i%a[j]==0){
                maybe++;
            }
        }
        if(maybe==a.length){
            almost.push(i);
        }
    }
    for(let i=0;i<almost.length;i++){
        maybe=0;
        for(let j=0;j<b.length; j++){
            if(b[j]%almost[i]==0){
                maybe++;
            }
        }
        if(maybe==b.length){
            yes.push(almost[i]);
        }
    }
    return yes.length;
}