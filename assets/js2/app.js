
let year = +prompt('Введите год в формате 1111');

console.log(`введен ${year} год`);

console.log( year, '% 4 =>', year % 4); // видеть остаток
let rest = year % 4;
console.log(`ostatok ot ${year} % 4 = ${rest}, ${rest} == 0 => ${rest == 0}`); // тру или фолс

rest = year % 100;
console.log(year, '% 100 =>', year % 100); // видеть остаток na 100
console.log(`ostatok ot ${year} % 100 = ${rest}, ${rest} != 0 => ${rest != 0}`); // тру или фолс

if((0 == 0 && 0 == 0 ) || 8 == 0) {
console.log('halloworld')
}

if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log('год високосный');
    alert('год високосный');
} else {
    console.log('год не високосный');
    alert('год не високосный');
}