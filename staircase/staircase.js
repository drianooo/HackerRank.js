function staircase(n) {
    let aux = "";
    for (let i = 1; i < n + 1; i++) {
        for (let j = i; j < n; j++) {
            aux += " ";
        }
        for (let k = n - i; k < n; k++) {
            aux += "#";
        }
        if (i != n) aux += "\n";
    }
    console.log(aux);
}