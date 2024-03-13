function diagonalDifference(arr) {
    let aux = 0;
    let aux2 = 0;
    let tamanho = arr.length;
    for (let i = 0; i < tamanho; i++) {
        aux += arr[i][i];
        aux2 += arr[i][tamanho - i - 1];
    }
    return Math.abs(aux - aux2);
}