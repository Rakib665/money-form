function getInput(id){
    let incomeId = document.getElementById(id);
    let incomeText = incomeId.value ;
    let income = parseInt(incomeText);
    return income ;
}
function totalExpensesCalculate(){
    let foodValue = getInput('foodId');
    let rentValue = getInput('rentId');
    let clothId = getInput('clothId');
    let totalSpent = foodValue + rentValue + clothId;
     return totalSpent ;
}
function afterExpensesBalance (){
    var sallary = getInput('incomeId');
    var spend = totalExpensesCalculate();
    var balanceId = document.getElementById('balance');
    var balance = sallary - spend;
    balanceId.innerText = balance;
    return balance
}
// saving money
function savingMoney (){
    var monthlySellary = getInput('incomeId');
    var savingPercent = getInput('saveId');
    var saveMoney = (monthlySellary / 100) * savingPercent;
     var showSavingMoney = document.getElementById('saving-balance-id');
     showSavingMoney.innerText = parseInt(saveMoney);
     return showSavingMoney.innerText
    //  let showSaveValue = showSavingMoney.innerText;
}
// for error section
function errorHandle (){
    let foodValue = getInput('foodId');
    let rentValue = getInput('rentId');
    let clothId = getInput('clothId');
}
document.getElementById('calculate-btn').addEventListener('click', function(){
    // total-expences
    var totalSpentId = document.getElementById('total-spent');
    var totalMoneyspend = totalSpentId.innerText;
    totalSpentId.innerText = totalExpensesCalculate();

// for balance 
    // var sallary = getInput('incomeId');
    // var spend = totalExpensesCalculate();
    // var balanceId = document.getElementById('balance');
    // var balance = sallary - spend;
    // balanceId.innerText = balance;
    afterExpensesBalance();

// error handle 1
let income = getInput('incomeId');
if(income<0){
    let alert = document.getElementById('for-negative-number');
    alert.style.display = 'block';
}

// error handle -2
let food = getInput('foodId');
let rent = getInput('rentId')
let cloth = getInput('clothId');
if(isNaN(food, rent, cloth)){
    let number = document.getElementById('for-number');
    number.style.display = 'block';
}
})


document.getElementById('save-btn').addEventListener('click', function(){ 
        // saving section
   let saveMoney = savingMoney();
   let afterExpenses = afterExpensesBalance();

     // remaining balance
     let remainingBalance =  afterExpenses - saveMoney ;
     var remainingId = document.getElementById('remaining-balance-id');
     remainingId.innerText = remainingBalance;
})