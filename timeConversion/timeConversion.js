function timeConversion(s) {
    let aux;
    if (s.substring(0, 2) == "12") {
        if (s.substring(8, 10) == "PM") {
            aux = s.substring(0, 8);
        }
        else if (s.substring(8, 10) == "AM") {
            aux = "00" + s.substring(2, 8);
        }
    }
    else if (s.substring(8, 10) == "PM") {
        aux = parseInt(s.substring(0, 2), 10) + 12 + s.substring(2, 8);
    }
    else if (s.substring(8, 10) == "AM") {
        aux = s.substring(0, 8)
    }
    return aux;
}