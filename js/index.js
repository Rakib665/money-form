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

document.getElementById('calculate-btn').addEventListener('click', function(){
    // total-expences
    var totalSpentId = document.getElementById('total-spent');
    var totalMoneyspend = totalSpentId.innerText;
    totalSpentId.innerText = totalExpensesCalculate();

// for balance 
    var sallary = getInput('incomeId');
    var spend = totalExpensesCalculate();
    var balanceId = document.getElementById('balance');
    var balance = sallary - spend;
    balanceId.innerText = balance;

   

    
    
})

    // saving section

document.getElementById('save-btn').addEventListener('click', function(){ 
    var monthlySellary = getInput('incomeId');
    var savingPercent = getInput('saveId');
    var saveMoney = (monthlySellary / 100) * savingPercent;
     var showSavingMoney = document.getElementById('saving-balance-id');
     showSavingMoney.innerText = parseInt(saveMoney);

    
    console.log(saveMoney);
})