function climbingLeaderboard(ranked, player) {
    let aux=[];
    let pos=0;
    let lastR=0;
        for(let j=0, i=player.length-1; j<ranked.length;j++){
            if(j>0){
                lastR=ranked[j-1];
            }
            if(ranked[j]!=lastR){
                pos++;
            }
            if(player[i]>=ranked[j]){
                aux.unshift(pos);
                if(i==0){
                    break;
                }
                i--;
                j--;
                pos--
            }
            if(player[i]<ranked[ranked.length-1] && j==ranked.length-1){
                aux.unshift(pos+1);
                if(i!=0){
                    i--;
                    j--;
                    pos--;
                }
                if(j==ranked.length-1){
                    break;
                }
            }
        }
    return aux;
}