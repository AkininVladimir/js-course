/* Три способа обьявления переменной */ /* Подключение JS к странице и переменные */
// var leftBorderWidth = 1;
// let second = 2;
// const pi= 3.14;
// console.log(pi)

/* Классификация типов данных в JavaScript */
// var number = 5; число
// console.log ( 4/0 );    Infinity
// console.log ('string'*9); NaN
// числовые
// var string ='Hello' строка, обязательно ковычки
// var sym = Symbol() символ, обязательно скобки
// var boolean = true/fallse логический правда/ложь
// null - 'это когда в коде просто не существует'
// undefined - "это когда объект существует, но не имеет значения"
/* ПРОСТЫЕ ТИПЫ ДАННЫХ */
// var obj = {}- хранилище данных (фигурные скобки обязательны)
// let man = {
//     name: 'Василий',
//     age: 26,
//     isMarriad: true
// };
// console.log(man.['name']);
// let arr = ['москвич', 'жигули', 'волга'];
// console.log(arr[1]);

// /* Простое общение с пользователем */
// // console.log (   )   - 'для общения через конссоль бразузера'
// // alert( ) -  'Объявление модального окна'
// // alert("hello world")
// // console.log(alert);
//     // let answer = prompt('Вам есть 18 лет?', 'Да');

//     console.log(typeof(answer));

//     /* Операторы в JS */
//  // конкатинация
// console.log('arr'+'- object');

// console.log( 1+ +'- object');

// // инкримент.дикримент
// let incr = 10,
//     decr = 10;
// incr ++;
// decr --;
//     console.log(incr);
//     console.log(decr);

// let incr = 10,
//     decr = 10;

//     console.log(++incr);
//     console.log(--decr);

//     console.log(35%2);
//     '=' - равенство;
//     '==' - проверка на равенство;
//     '===' - строгое соответствие;
// console.log('2'== 2); true
// console.log('2'=== 2); false

// Оператор &&- и

// const isOpen = true,
//       isCloused = true;

// console.log(isOpen && isCloused);

// Оператор ||- или

// const isOpen = false,
//       isCloused = false;

// console.log(isOpen || isCloused);

// false - возможно при соблюдении обоих условий

// // знак отрицания - !

// const isOpen = false,
//       isCloused = false;

// console.log(isOpen || !isCloused);

// ! -дает true