
 let mass = +prompt ('Ваш вес в кг');

 console.log (`Масса тела: ${mass}`);

 let h = +prompt ('Ваш рост в см');

 h = h / 100;

 console.log (`Рост в метрах: ${h}`);

let index = mass / (h * h);

index = index * 100;

index = Math.round (index);

index = index / 100;

console.log (`индекс: ${index}`);

if(index <= 16) {
    alert(`Ваш индекс: ${index},выраженный дефицит массы тела.`);
    console.log('выраженный дефицит массы тела.');
}

if(index  > 16 && index <= 18.5) {
    alert(`Ваш индекс: ${index},недостаточная (дефицит) массы тела.`);
    console.log('недостаточная (дефицит) массы тела.');
}

if(index  > 18 && index <= 25) {
    alert(`Ваш индекс: ${index},норма.`);
    console.log(',норма.');
}


if(index  > 25 && index <= 30) {
    alert(`Ваш индекс: ${index},избыточная масса тела (предожирнеи).`);
    console.log(',избыточная масса тела (предожирнеи)');
}    

if(index  > 30 && index <= 35) {
    alert(`Ваш индекс: ${index},Ожирение 1 степени.`);
    console.log('Ожирение 1 степени.');
}  

if(index  > 35 && index <= 40) {
    alert(`Ваш индекс: ${index},Ожирение 2 степени.`);
    console.log('Ожирение 2 степени.');
} 

if(index  > 40 ) {
    alert(`Ваш индекс: ${index},Ожирение 3 степени.`);
    console.log('Ожирение 3 степени.');
} 






if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log('год високосный');
    alert('год високосный');
} else {
    console.log('год не високосный');
    alert('год не високосный');
}