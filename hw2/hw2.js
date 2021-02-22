let nNumber, mNumber, missEvenNumber, sum;

// nNumber = Math.floor(prompt('Введіть число N:'));
// mNumber = Math.floor(prompt('Введіть число M:'));
nNumber = NaN;
mNumber = NaN;

while (Number.isNaN(nNumber)) {
    console.log(nNumber);
    const inputn = prompt('Введіть число N:');
    if (inputn) {
        nNumber = Math.floor(inputn);
    }
}
console.log(nNumber);
while (Number.isNaN(mNumber)) {
    const inputm = prompt('Введіть число M:');
    if (inputm) {
        mNumber = Math.floor(inputm);
    }
}
missEvenNumber = confirm('Пропускати парні числа?');
sum = 0;
if (missEvenNumber == true){
    for (;nNumber <= mNumber; nNumber++){
        if (nNumber%2 == 1){
            sum += nNumber;
        }
    }
} else{
    for (;nNumber <= mNumber; nNumber++){
        sum += nNumber;
    }
}




console.log(nNumber, mNumber, missEvenNumber, sum)
document.writeln(sum)

