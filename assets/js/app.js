
 let mass = +prompt ('Ваш вес в кг');

 console.log (`Масса тела: ${mass}`);

 let h = +prompt ('Ваш рост в см');

 h = h / 100;

 console.log (`Рост в метрах: ${h}`);

let index = mass / (h*h);

index = index * 100;

index = Math.round (index);

index = index / 100;

console.log (`индекс: ${index}`);

if(index <= 16) {
    alert(`Ваш индекс: ${index},выраженный дефицит массы тела.`);
    console.log('выраженный дефицит массы тела.');
}

if(index  > 16 && <= 18.5) {
    alert(`Ваш индекс: ${index},недостаточная (дефицит) массы тела.`);
    console.log('недостаточная (дефицит) массы тела.');
}