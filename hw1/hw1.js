
const price1 = 15.678;
const price2 = 123.965;
const price3 = 90.2345;

console.log(Math.max(price1, price2, price3));
console.log(Math.min(price1, price2, price3));
let allPrice;
allPrice = price3 + price2 + price1;
console.log(allPrice);

console.log(Math.floor(price1) + Math.floor(price3) + Math.floor(price2));
allPriceRoundTo = Math.round(allPrice/100) * 100;
console.log(allPriceRoundTo);
let priceBool;
if (Math.floor(allPrice)%2 == 1){
    priceBool = false
} else {
    priceBool = true
}
console.log(priceBool);

console.log(500 - allPrice);

let allPriceMidle ;
allPriceMidle = (price1 + price2 + price3)/3;
console.log(Math.round(allPriceMidle * 100)/100)

let sobivartist, prybutok, znyzka, doOplaty;

znyzka = Math.round(Math.random()*100)/100;

doOplaty = allPrice * (1 - znyzka);
sobivartist = allPrice/2;
prybutok =  sobivartist - (allPrice - doOplaty);
console.log(znyzka, doOplaty, sobivartist, prybutok)
document.writeln(`</br>Максимальна ціна: ${Math.max(price1, price2, price3)}`);
document.writeln(`</br>Мінімальна ціна: ${Math.min(price1, price2, price3)}`);
document.writeln(`</br>Вартість всіх товарів: ${allPrice}`);
document.writeln(`</br>Ціла частина вартості товарів: ${Math.floor(price1) + Math.floor(price3) + Math.floor(price2)}`);
document.writeln(`</br>Сума товарів, округлена до сотень: ${allPriceRoundTo}`);
document.writeln(`</br>Чи є сума товарів парним числом: ${priceBool}`);
document.writeln(`</br>Решта з 500 грн: ${500 - allPrice}`);
document.writeln(`</br>Середнє значення цін, округлене до другого знаку після коми: ${Math.round(allPriceMidle * 100)/100}`);
document.writeln(`</br>Знижка: ${znyzka}`);
document.writeln(`</br>До оплати: ${doOplaty} `);
document.writeln(`</br>Собівартість: ${sobivartist}`);
document.writeln(`</br>Прибуток: ${prybutok}</br>`);



