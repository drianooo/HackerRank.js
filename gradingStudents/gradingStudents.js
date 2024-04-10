function gradingStudents(grades) {
    let roundedG=[];
    for(let i=0;i<grades.length; i++){
        if(grades[i]>37 && grades[i]%5 > 2){
            roundedG.push((grades[i]-grades[i]%5)+5);
        }
        else{
            roundedG.push(grades[i]);
        }
    }
    return roundedG;
}