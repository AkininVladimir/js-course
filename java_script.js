'use strict';

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: true
};

function start() {
    money = + prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == "" || money == null) {
        money = + prompt('Ваш бюджет на месяц?', '');  
    }
}
start();

/* цикл FOR */

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


/* Функция с расчетом уровня достатка */
let a = +prompt('Введите обязательную статью расходов в этом месяце'),
    b = prompt('Во сколько обойдется');

function detectLevel() {
    for (let i = 0; i < 2; i ++) {
        if((typeof(a)) ==='string' && (typeof(a)) !=null && (typeof(b)) !=null && (typeof(a)) !='' && (typeof(b)) !=''&& a.length < 50){
            console.log('done'); 
            appData.expenses[a] = b;
        } else {
            console.log('incorrectly entered data');
            i --;
        }
}
}

/* Функция  расчет дневного бюджета */
function detectDayBudget () {
    if (appData.moneyForday <1000 ){
        console.log('Ниже прожиточного минимума');
        } else if (appData.moneyForday>1000 && appData.moneyForday < 2000){
            console.log('У Вас средний доход');
        } else if(appData.moneyForday>2000) {
            console.log('У Вас высокий доход');
        } else{ console.log('Произошла ошибка')};
    appData.moneyForday = appData.budget / 30;
    alert('Ежедневная подтребность составляет: ' + appData.moneyForday);
}
detectDayBudget();

/* Функция ежемесячный доход с депозита */
function monthlySavingsdeposit () {
    if (appData.savings === true) {
        let deposit = +prompt ('Какоква сумма Вашего депозита?'),
            prosent = +prompt ('Под какой процент?');
        appData.monthProsentDeposit = (deposit/100/12*prosent);
        alert( 'Ваш ежемесячный доход с депозита:' + appData.monthProsentDeposit);
    }   
}
monthlySavingsdeposit ();

/* Функция для определения необязательных расходов */
let qustExp;

function chooseOptExpenses(){
    qustExp = +prompt('Статья необязательных расходов?');
    let i=0;
        do {
            qustExp = +prompt('Статья необязательных расходов?'); 
        } while (i<3);
    appData.optionalExpenses[i] = qustExp;
    
}
chooseOptExpenses();