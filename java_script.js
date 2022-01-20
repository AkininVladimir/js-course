'use strict';
/* for next leson */
let money = + prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false
}
/* цикл FOR */
for (let i = 0; i < 2; i ++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется');
    if((typeof(a)) ==='string' && (typeof(a)) !=null && (typeof(b)) !=null && (typeof(a)) !='' && (typeof(b)) !=''&& a.length < 50){
        console.log('done'); 
        appData.expenses[a] = b;
    } else {
        console.log('incorrectly entered data');
        i --;
    }
    /* цикл while */
// let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется');
// let i=0;
// while(i = 0, i<2, i++) {
//     if(typeof(a) === "string" && typeof(a) != null && typeof(b) != null && typeof(a) != '' && typeof(b) != '' && a.length < 50 ){
//         console.log ('good');
//     } else {
//         console.log('no good');
//         i--;

//     }
// }
/* Цикл (DO) */
// let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется');
// let i = 0;
// do {
//     if (typeof(a) === 'string' && typeof(b) === 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != '' && typeof(b) != '' && a.length <50){
//         console.log('good');
//     } else {
//         console.log('no good');
//         i--;
//     }
// } while (i = 0);

appData.moneyForday = appData.budget / 30;

alert('Ежедневная подтребность: ' + appData.moneyForday);

if (appData.moneyForday <1000 ){
    console.log('Ниже прожиточного минимума');
} else if (appData.moneyForday>1000 && appData.moneyForday < 2000){
    console.log('У Вас средний доход');
} else if(appData.moneyForday>2000) {
    console.log('У Вас высокий доход');
} else{
    console.log('Произошла ошибка');
};
}