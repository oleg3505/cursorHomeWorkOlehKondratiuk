let numberForFunction1 = prompt('Введіть число для функції 1:');

function getMaxDigit(){
    let maxDigit = Math.max(...numberForFunction1.split(''))
    return maxDigit;
}
document.writeln(`Функція №1: ${getMaxDigit(numberForFunction1)}`);




let str = prompt(`Введіть ім\'я:`);
function makeFirstLetterBiger(){
    let allLettersLower = str.toLowerCase();
    let firstLetterBiger = allLettersLower[0].toUpperCase();
    for(let i = 1; i <= allLettersLower.length - 1; i++){
        firstLetterBiger += allLettersLower[i];
        
    }
    return firstLetterBiger;    
}
document.writeln(`<br/>Функція №3: ${makeFirstLetterBiger(str)}`)


let a = prompt(`Введіть зарплату до оподаткування:`);
function uCanGet(){
    a = a * 0.805
    return a;
}
document.writeln(`</br>Функція №4: ${uCanGet(a)}`)



let wordForFunctions = prompt(`Введіть слово в якому потрібно провести пошук`);
let letterForFunction = prompt(`Введіть літеру, яку потрібно знайти`);

function countLetter(letterForFunction, wordForFunctions){
    let findingLetters = 0;
    let wordForFunctionsLower = wordForFunctions.toLowerCase();
    let letterForFunctionLower =  letterForFunction.toLowerCase();
    
    for (let i = 0; i <= wordForFunctionsLower.length - 1;i++){
        
        if (wordForFunctionsLower.charAt(i) === letterForFunctionLower){
            findingLetters += 1;
        }
    }
    return findingLetters;
}

document.writeln(`<br/>Функція №6: ${countLetter(letterForFunction, wordForFunctions)}`)


let myPasswordLength = prompt(`Введіть довжину паролю:`);
function getRandomPassword(){
    let rndPassword = '' ;
    for (let i = 1; i <= myPasswordLength; i++){
        rndElement = Math.floor(Math.random() * 10);
        rndPassword += rndElement;
    }return rndPassword;
}
document.writeln(`<br/>Функція №8: ${getRandomPassword(myPasswordLength)}`)



let textForCheck = prompt(`Текст для перевірки на паліндром:`);

function isPalyndrom(textForCheck){
    let fullTextForCheck = textForCheck.split(' ').join('').toLowerCase();
    let fullTextForCheckArray = [];
    let fullTextForCheckArrayReverse = [];
    for (let i = 0; i <= fullTextForCheck.length - 1;i++){
        fullTextForCheckArray.push(fullTextForCheck.charAt(i));
        fullTextForCheckArrayReverse.unshift(fullTextForCheck.charAt(i));
    
    }

    if (fullTextForCheckArrayReverse.join('') === fullTextForCheckArray.join('')){
        return true
    }else {
        return false    
    }
}
document.writeln(`<br/>Функція №10: ${isPalyndrom(textForCheck)}`)


