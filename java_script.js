'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: ('money'),
    timeData: time,
    expenses: {},
    income: [],
    savings: false
}

let firstQustion = prompt('Введите обязательную статью расходов в этом месяце', ''),
      secondQustion = prompt('Во сколько обойдется', ''),
      thirdQustion = prompt('Введите обязательную статью расходов в этом месяце', ''),
      firthQustion = prompt('Во сколько обойдется', '');

appData.expenses.firstQustion = secondQustion;
appData.expenses.thirdQustion = firthQustion;

alert(appData.budget/30);

      