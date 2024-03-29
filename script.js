

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    } 
}   
start(); 
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
       
        for (let i = 0; i < 2; i++) {
          let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
              b = prompt ("Во сколько обойдется?", "");
    
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                                                                    
              console.log ("done");
    
              appData.expenses[a] = b;
           } else {                            
              console.log ("bad result");
              i--;
           }  
       }    
   },
   detectDayBudget: function() {                                    // Расчет дневного бюджета
    appData.moneyPerDay = (appData / 30).toFixed();
    alert("Бюджет на 1 день составляет" + appData.moneyPerDay + "руб.");
   },
   detectLevel: function(){                                           // Расчет уровня достатка                   
      if (appData.moneyPerDay < 100) {
          console.log ("Это минимальный уровень достатка!");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
      } else if (appData.moneyPerDay > 2000) {
          console.log ("Это высокий уровень достатка!");
      } else {
          console.log ("Произошла ошибка");
        }
   },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                precent = +prompt("Под какой процент?");
    
            appData.monthIncome = save / 100 / 12 * precent;    
            alert("Доход в месяц с вашего депозида:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){                                       // Функция для определения необязательных расходов
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function(){
        let items = promt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

        if(typeof(items) !="string" || items == "" || typeof(items) == null){
            console.log("Вы ввели не коректные данные");
        } else {
            appData.income = items.split(', ');
        appData.income.push(promt('Может что-то еще?'));
        appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i){
            alert("Способы доп.заработка: " + (i + 1) + " - " + itemmassive);
        });

    }
};

for(let key in appData){
    console.log("Программа включает в себя данные: " + key + " - " + appData[key];
}